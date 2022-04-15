import RoomStatus from './common/rooms/RoomStatus';
import UnitState from './common/game/UnitState';
import Unit from './common/game/Unit';
import CompassDirection from './common/game/CompassDirection';
import AnimationStyle from './common/drawing/AnimationStyle';
import {Vector2} from "three";

interface UnitInstance {
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitState: UnitState;
    unitStateStartedAt: number;

    position: Vector2;
    movingTo?: Vector2;
    movingDirection?: Vector2;
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
    position: Vector2;
    unitType: Unit,
    forPlayer: PlayerId,
    direction?: CompassDirection,
} | {
    name: 'MOVE_UNIT_TO';
    position: Vector2;
    unit: UnitInstance;
} | {
    name: 'STOP_UNIT';
    id: UnitId;
};

interface ClientState {
    unitHitBoxes: Array<{
        hitBox: Rectangle,
        unit: UnitInstance,
    }>;
    selectedUnits: UnitInstance[];
    lastLeftClick: Vector2 | null;
}

type ClientStateAction = {
    name: 'DRAG_START',
    position: Vector2,
} | {
    name: 'DRAGGING',
    position: Vector2,
} | {
    name: 'DRAG_END',
    position: Vector2,
} | {
    name: 'LEFT_CLICK',
    position: Vector2,
} | {
    name: 'RIGHT_CLICK',
    position: Vector2,
} | {
    name: 'UNIT_DRAWN',
    hitBox: Rectangle,
    unit: UnitInstance,
} | {
    name: 'FRAME_RENDERING_STARTED',
};

type GameDispatcher = (action: GameStateAction) => void;
type ClientDispatcher = (action: ClientStateAction) => void;

interface StateManagerInterface {
    init(): void;

    dispatchGame: GameDispatcher;
    dispatchClient: ClientDispatcher;

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
    hotspot: { x: number; y: number; }
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
            style: AnimationStyle;
        }
    }
}

interface Rectangle {
    p1: Vector2;
    p2: Vector2;
}

export {
    GameMode,
    GameDispatcher,
    ClientDispatcher,
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
    UnitStats,
    Rectangle,
};
