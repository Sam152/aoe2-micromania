import {RoomId} from "../../types";
import Room from "./Room";
import generateId from "../util/generateId";

export default class RoomManager {

    private rooms: { [key: RoomId]: Room; };

    constructor() {
    }

    createRoom(): Room {
        const id = generateId(12);
        this.rooms[id] = new Room(id, 2);
        return this.rooms[id];
    }

    getRooms(): Room[] {
        return Object.values(this.rooms);
    }

    getRoom(id: RoomId): Room {
        return this.rooms[id];
    }

}
