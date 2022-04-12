import {ClientId, RoomId} from "../../types";

export default class Room {
    id: RoomId;
    slots: number;
    players: ClientId[];
    spectators: ClientId[];
    private status: RoomStatus;

    constructor(id: RoomId, slots: number) {
        this.id = id;
        this.slots = slots;
        this.status = RoomStatus.Gathering;
    }

    join(clientId: ClientId) {
        this.players.push(clientId);
    }

    spectate(clientId: ClientId) {
        this.spectators.push(clientId);
    }
}
