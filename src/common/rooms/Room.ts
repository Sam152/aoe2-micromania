import {EmittedRoom, RoomId, StateManagerInterface} from '../../types';
import LocalStateManager from '../state/managers/LocalStateManager';
import Player from './Player';
import {BroadcastOperator} from 'socket.io/dist/broadcast-operator';
import ArcherMicro from '../modes/ArcherMicro';
import RoomStatus from './RoomStatus';
import {normalizeGameStateAction} from '../util/normalizer';

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
    }

    spectate(player: Player): void {
        this.spectators.push(player);
        player.socket.join(this.id);
    }

    hasPlayer(player: Player): boolean {
        return this.players.find((p) => p.socket.id === player.socket.id) !== undefined;
    }

    hasSpectator(player: Player): boolean {
        return this.spectators.find((p) => p.socket.id === player.socket.id) !== undefined;
    }

    startGame() {
        this.status = RoomStatus.Started;

        this.state = new LocalStateManager((gameState, action) => {
            // The network could either dispatch the whole units state OR the action, letting the clients
            // calculate the whole state + a hash of it's own internal calculated state.
            this.room.emit('gameStateUpdated', gameState);
        });

        const gameMode = new ArcherMicro();
        gameMode.start(this.state.dispatchGame.bind(this.state), this.state.getGameState());

        this.players.map((player) => {
            player.socket.on('stateDispatch', (action) => {
                this.state.dispatchGame(normalizeGameStateAction(action));
            });
        });

        this.state.init();
    }

    toEmitted(): EmittedRoom {
        return {
            id: this.id,
            players: this.players.length,
            spectators: this.spectators.length,
            slots: this.slots,
            status: this.status,
            joinable: this.status === RoomStatus.Gathering && this.players.length < this.slots,
        };
    }
}
