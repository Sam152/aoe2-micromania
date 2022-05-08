import {EmittedRoom, GameStateAction, RoomId, StateManagerInterface} from '../../types';
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import Player from './Player';
import {BroadcastOperator} from 'socket.io/dist/broadcast-operator';
import ArcherMicro from '../../common/modes/ArcherMicro';
import RoomStatus from './RoomStatus';
import {normalizeGameStateAction} from '../../common/util/normalizer';
import TransportEvent from "../../common/state/transport/TransportEvent";

export default class Room {
    id: RoomId;
    slots: number;
    players: Player[] = [];
    spectators: Player[] = [];
    state?: StateManagerInterface = null;
    public status: RoomStatus;
    room: BroadcastOperator<any, any>;

    constructor(id: RoomId, slots: number, room: BroadcastOperator<any, any>) {
        this.id = id;
        this.slots = slots;
        this.status = RoomStatus.Gathering;
        this.room = room;
    }

    join(player: Player): void {
        this.players.push(player);
        player.socket.join(this.id);
    }

    isFull(): boolean {
        return this.slots === this.players.length;
    }

    leave(leavingPlayer: Player): void {
        this.spectators = this.spectators.filter((player) => player.socket.id !== leavingPlayer.socket.id);
        this.players = this.players.filter((player) => player.socket.id !== leavingPlayer.socket.id);

        leavingPlayer.socket.leave(this.id);
        leavingPlayer.socket.removeAllListeners(TransportEvent.GameStateActionDispatch);
    }

    spectate(player: Player): void {
        this.spectators.push(player);
        player.socket.join(this.id);

        player.socket.on(TransportEvent.GameStateActionDispatch, (action: GameStateAction) => {
            if (action.n === 'SPECTATOR_LOADED') {
                player.socket.emit(TransportEvent.WholeGameStateTransmit, this.state.getGameState());
            }
        });
    }

    hasPlayer(player: Player): boolean {
        return this.players.find((p) => p.socket.id === player.socket.id) !== undefined;
    }

    getPlayerId(player: Player): number | null {
        if (!this.hasPlayer(player)) {
            return null;
        }
        return this.players.findIndex((p) => p.socket.id === player.socket.id) + 1;
    }

    hasSpectator(player: Player): boolean {
        return this.spectators.find((p) => p.socket.id === player.socket.id) !== undefined;
    }

    startGame(onStarted: Function) {
        this.status = RoomStatus.Starting;
        const gameMode = new ArcherMicro();

        this.state = new LocalStateManager((gameState, action) => {
            // The network could either dispatch the whole units state OR the action, letting the clients
            // calculate the whole state. Emitting the action only, seems to work, however are there circumstances
            // where clients could drift out of sync and require syncing back up?
            this.room.emit(TransportEvent.GameStateActionTransmit, action);
            gameMode.onGameAction(gameState, action, this.state.dispatchGame.bind(this.state));
        });

        this.players.map((player) => {
            player.socket.on(TransportEvent.GameStateActionDispatch, (action) => {
                // @todo, actions should be validated here for anti-cheat.
                this.state.dispatchGame(normalizeGameStateAction(action));

                if (!this.state.getGameState().gameModeStarted && this.state.getGameState().loadedPlayers.length === this.players.length) {
                    this.state.init();

                    gameMode.start(this.state.dispatchGame.bind(this.state), this.state.getGameState());

                    this.state.dispatchGame({n: 'GAME_MODE_STARTED'});
                    this.status = RoomStatus.Started;
                    onStarted();
                }
            });
        });
    }

    toEmitted(): EmittedRoom {
        return {
            id: this.id,
            players: this.players.length,
            spectators: this.spectators.length,
            slots: this.slots,
            status: this.status,
            joinable: this.status === RoomStatus.Gathering && this.players.length < this.slots,
            playersList: this.players.map(player => ({
                id: player.socket.id,
                name: player.getNickname(),
            })),
        };
    }
}
