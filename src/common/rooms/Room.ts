import {EmittedRoom, RoomId, StateManagerInterface} from '../../types';
import LocalStateManager from '../state/LocalStateManager';
import Player from './Player';
import {BroadcastOperator} from 'socket.io/dist/broadcast-operator';
import SpawnUnits from '../modes/SpawnUnits';
import RoomStatus from './RoomStatus';

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

        this.state = new LocalStateManager((gameState) => {
            this.room.emit('gameStateUpdated', gameState);
        });

        const gameMode = new SpawnUnits();
        gameMode.start(this.state.dispatchGame.bind(this.state));

        this.state.init();
    }

    toEmitted(): EmittedRoom {
        return {
            id: this.id,
            players: this.players.length,
            spectators: this.spectators.length,
            slots: this.slots,
            status: this.status,
            joinable: this.status === RoomStatus.Gathering && this.players.length < this.slots
        };
    }
}
