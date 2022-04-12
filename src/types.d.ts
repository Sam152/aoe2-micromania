import RoomStatus from "./common/rooms/RoomStatus";

interface GamePosition {
    x: number;
    y: number;
}

interface ScreenPosition {
    x: number;
    y: number;
}

interface Unit {
    position: GamePosition;
    movingTo: GamePosition | null;
}

interface Projectile {

}

interface Player {

}

interface GameState {
    units: Unit[];
    projectiles: Projectile[];
    players: Player[];
}

type UnitId = number;
type RoomId = string;
type ClientId = string;

type GameStateAction = {
    name: "TICK";
} | {
    name: "SPAWN_UNIT";
    position: GamePosition;
} | {
    name: "MOVE_UNIT_TO";
    position: GamePosition;
    id: UnitId;
}| {
    name: "STOP_UNIT";
    id: UnitId;
};

interface ClientState {

}

type ClientStateAction = {
    name: "DRAG_START",
    position: ScreenPosition,
} | {
    name: "DRAG_END",
    position: ScreenPosition,
};

type GameDispatcher = (action: GameStateAction) => void;
interface StateManagerInterface {
    init(): void;
    dispatchGame: GameDispatcher;
    dispatchClient(action: ClientStateAction): void;
    getGameState(): GameState;
    getClientState(): ClientState;
}

interface GameMode {
    start(dispatcher: GameDispatcher): void;
}

interface EmittedPlayerLobbyMetadata {
    inRoom?: EmittedRoom;
    isSpectator?: boolean;
}

interface EmittedRoom {
    id: RoomId;
    players: number;
    spectators: number;
    slots: number;
    status: RoomStatus;
}

export {
    GameMode,
    GameDispatcher,
    GameState,
    GameStateAction,
    ClientState,
    ClientStateAction,
    StateManagerInterface,
    RoomId,
    ClientId,
    EmittedPlayerLobbyMetadata,
    EmittedRoom,
}
