import {RoomId, StateManagerInterface} from "../../types";
import LocalStateManager from "../state/LocalStateManager";
import Player from "./Player";
import {BroadcastOperator} from "socket.io/dist/broadcast-operator";
import SpawnUnits from "../modes/SpawnUnits";

export default class Room {
    id: RoomId;
    slots: number;
    players: Player[];
    spectators: Player[];
    state?: StateManagerInterface = null;
    private status: RoomStatus;
    room: BroadcastOperator<any, any>;

    constructor(id: RoomId, slots: number, room: BroadcastOperator<any, any>) {
        this.id = id;
        this.slots = slots;
        this.status = RoomStatus.Gathering;
        this.room = room;
    }

    join(player: Player) {
        this.players.push(player);
        player.socket.join(this.id);
    }

    spectate(player: Player) {
        this.spectators.push(player);
        player.socket.join(this.id);
    }

    start() {
        this.room.emit('gameStarted');
        this.state = new LocalStateManager((gameState) => {
            this.room.emit('gameStateUpdated', gameState);
        });

        const mode = new SpawnUnits();
        mode.start(this.state.dispatchGame.bind(this.state));

        this.state.init();
    }
}
