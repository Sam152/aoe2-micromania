import {RoomId} from "../../types";
import Room from "./Room";
import generateId from "../util/generateId";
import {Server, Socket} from "socket.io";
import EventEmitter from "events";

export default class RoomManager {

    io: Server;
    private rooms: { [key: RoomId]: Room; } = {};

    constructor(io: Server) {
        this.io = io;
    }

    createRoom(): Room {
        const id = generateId(12);
        this.rooms[id] = new Room(id, 2, this.io.to(id));
        return this.rooms[id];

    }

    getRooms(): Room[] {
        return Object.values(this.rooms);
    }

    getRoom(id: RoomId): Room {
        return this.rooms[id];
    }

    emitRooms(emitter: EventEmitter) {
        emitter.emit('roomsList', this.getRooms().map(room => ({
            id: room.id,
        })));
    }

}
