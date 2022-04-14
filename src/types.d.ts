import RoomStatus from './common/rooms/RoomStatus';
import UnitState from "./common/game/UnitState";
import Unit from "./common/game/Unit";
import CompassDirection from "./common/game/CompassDirection";

interface GamePosition {
    x: number;
    y: number;
}

interface ScreenPosition {
    x: number;
    y: number;
}

interface UnitInstance {
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitState: UnitState;

    position: GamePosition;
    movingTo: GamePosition | null;
    direction: CompassDirection;
}

interface Projectile {

}

interface Player {

}

interface GameState {
    ticks: number;
    units: UnitInstance[];
    projectiles: Projectile[];
    players: Player[];
}

type UnitId = number;
type RoomId = string;
type ClientId = string;
type PlayerId = number;

type GameStateAction = {
    name: 'TICK';
} | {
    name: 'SPAWN_UNIT';
    position: GamePosition;
    unitType: Unit,
    forPlayer: PlayerId,
} | {
    name: 'MOVE_UNIT_TO';
    position: GamePosition;
    id: UnitId;
}| {
    name: 'STOP_UNIT';
    id: UnitId;
};

interface ClientState {

}

type ClientStateAction = {
    name: 'DRAG_START',
    position: ScreenPosition,
} | {
    name: 'DRAG_END',
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
    joinable: boolean;
}

interface SlpFrame {
    cmdTableOffset: number;
    height: number;
    hotspot: {x: number; y: number;}
    outlineTableOffset: number;
    paletteOffset: number;
    properties: number;
    width: number;
}

interface RenderedSlpFrame extends SlpFrame {
    rendered: {
        [key: number]: ImageBitmap;
    }
}

interface UnitStats {
    attackFrameDelay: number;
    reloadTime: number;
    movementRate: number;
    hitPoints: number;
    attackRange: number;
    attackDamage: number;
    animations: {
        [key in UnitState]: {
            slp: string;
            animationDuration: number;
        }
    }
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
    SlpFrame,
    RenderedSlpFrame,
    GamePosition,
    UnitStats,
};
