import {EmittedRoom, RoomId} from '../../types';
import Room from './Room';
import generateId from '../util/generateId';
import {Server} from 'socket.io';
import EventEmitter from 'events';
import Player from './Player';
import RoomStatus from './RoomStatus';

export default class RoomManager {
    io: Server;
    private rooms: { [key: RoomId]: Room; } = {};

    constructor(io: Server) {
        this.io = io;
    }

    createRoom(roomOwner: Player): Room {
        if (this.playerIsInRoom(roomOwner)) {
            return;
        }
        const id = generateId(12);
        this.rooms[id] = new Room(id, 2, this.io.to(id));
        this.joinRoom(id, roomOwner);
        return this.rooms[id];
    }

    getRooms(): Room[] {
        return Object.values(this.rooms);
    }

    getRoom(id: RoomId): Room {
        return this.rooms[id];
    }

    joinRoom(id: RoomId, player: Player) {
        if (this.playerIsInRoom(player)) {
            return;
        }
        const room = this.getRoom(id);

        if (room.status === RoomStatus.Started) {
            return;
        }
        if (room.isFull()) {
            return;
        }

        room.join(player);
    }

    spectateRoom(id: RoomId, player: Player) {
        if (this.playerIsInRoom(player)) {
            return;
        }

        const room = this.getRoom(id);
        room.spectate(player);
    }

    leaveRoom(player: Player): Room | null {
        const playerRoom = this.getRoomWithPlayer(player);
        if (playerRoom) {
            playerRoom.leave(player);
            return playerRoom;
        }
        return null;
    }

    getRoomWithPlayer(player: Player): Room | null {
        return this.getRooms().find((room) => room.hasPlayer(player) || room.hasSpectator(player)) ?? null;
    }

    playerIsInRoom(player: Player): boolean {
        return this.getRoomWithPlayer(player) !== null;
    }

    emitRooms(emitter: EventEmitter) {
        emitter.emit('listRooms', this.getRooms().map((room) => room.toEmitted()));
    }

    emitPlayerInfoForRoom(roomId: RoomId) {
        const room = this.getRoom(roomId);
        room.players.map((player) => this.emitPlayerInfo(player));
        room.spectators.map((player) => this.emitPlayerInfo(player));
    }

    emitPlayerInfo(player: Player) {
        const playerRoom = this.getRoomWithPlayer(player);
        player.socket.emit('playerInfo', {
            inRoom: playerRoom ? playerRoom.toEmitted() : null,
            isSpectator: playerRoom ? playerRoom.hasSpectator(player) : null,
        });
    }
}