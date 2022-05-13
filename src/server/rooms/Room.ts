import {EmittedRoom, GameStateAction, RoomId, StateManagerInterface} from '../../types';
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import Player from './Player';
import {BroadcastOperator} from 'socket.io/dist/broadcast-operator';
import ArcherMicro from '../../common/modes/ArcherMicro';
import RoomStatus from './RoomStatus';
import {normalizeGameStateAction} from '../../common/util/normalizer';
import TransportEvent from '../../common/state/transport/TransportEvent';
import RecordedGame from "../recs/RecordedGame";

export default class Room {
    id: RoomId;
    slots: number;
    players: Player[] = [];
    spectators: Player[] = [];
    state?: StateManagerInterface = null;
    public status: RoomStatus;
    room: BroadcastOperator<any, any>;
    private recordedGame: RecordedGame;

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
        const leavingIndex = this.players.findIndex((player) => player.socket.id === leavingPlayer.socket.id);
        this.players = this.players.filter((player) => player.socket.id !== leavingPlayer.socket.id);

        leavingPlayer.socket.leave(this.id);
        leavingPlayer.socket.removeAllListeners(TransportEvent.GameStateActionDispatch);

        if (this.status === RoomStatus.Starting || this.status === RoomStatus.Started) {
            this.state.dispatchGame({n: 'PLAYER_DISCONNECTED', player: leavingIndex + 1});
            this.endGame();
        }
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

    endGame(): void {
        this.players.map((player) => player.socket.removeAllListeners(TransportEvent.GameStateActionDispatch));
        this.state.cleanUp();
        this.recordedGame.completeRecording();
        this.status = RoomStatus.Completed;
    }

    startGame(onStarted: Function) {
        this.status = RoomStatus.Starting;
        const gameMode = new ArcherMicro();

        this.recordedGame = new RecordedGame(this.players.map(player => player.getNickname()));

        this.state = new LocalStateManager((gameState, action) => {
            // The network could either dispatch the whole units state OR the action, letting the clients
            // calculate the whole state. Emitting the action only, seems to work, however are there circumstances
            // where clients could drift out of sync and require syncing back up?
            this.room.emit(TransportEvent.GameStateActionTransmit, action);

            // Keep a log of all actions created during this game, in order to save a recorded game.
            this.recordedGame.pushAction(action);

            if (action.n === 'T') {
                gameMode.onTick(gameState, action, this.state.dispatchGame.bind(this.state));
            }
            if (gameState.gameEnded) {
                this.endGame();
            }
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
            playersList: this.players.map((player) => ({
                id: player.socket.id,
                name: player.getNickname(),
            })),
        };
    }
}
