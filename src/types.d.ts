import RoomStatus from './common/rooms/RoomStatus';
import UnitState, {FallenUnitState} from './common/units/UnitState';
import Unit from './common/units/Unit';
import CompassDirection from './common/units/CompassDirection';
import AnimationStyle from './common/units/AnimationStyle';
import {Vector2} from 'three';
import FormationType from './common/units/formations/FormationType';

export interface UnitInstance {
    id: number;
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitState: UnitState;
    unitStateStartedAt: number;

    // A waypoint is an exact location a unit is moving to and a clicked waypoint
    // is the users input that lead to a unit moving, independent of any formations.
    waypoints: Array<Vector2>;
    clickedWaypoints: Array<Vector2>;

    position: Vector2;
    movingDirection?: Vector2;
    direction: CompassDirection;
}

export interface FallenUnitInstance {
    id: number;
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitFallenAt: number;
    position: Vector2;
    direction: CompassDirection;
}

export interface Projectile {

}

export interface Player {

}

export interface RendererInterface {
    render: (gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) => void;
    bootUp: () => Promise<void>;
}

export interface GameState {
    ticks: number;
    units: UnitInstance[];
    fallenUnits: FallenUnitInstance[];
    mapSize: number;
}

export type UnitId = number;
export type RoomId = string;
export type ClientId = string;
export type PlayerId = number;

type GameStateAction = {
    name: 'TICK';
} | {
    name: 'SPAWN_UNIT';
    position: Vector2;
    unitType: Unit,
    forPlayer: PlayerId,
    direction?: CompassDirection,
} | {
    name: 'MOVE_UNITS_TO';
    position: Vector2;
    units: number[];
    formation: FormationType;
} | {
    name: 'ADD_WAYPOINT';
    position: Vector2;
    units: number[];
    formation: FormationType;
} | {
    name: 'STOP_UNITS';
    units: number[];
} | {
    name: 'DELETE_UNITS';
    units: number[];
};

export interface ClientState {
    unitHitBoxes: Array<{
        hitBox: Rectangle,
        unit: UnitInstance,
    }>;
    playingAs: number;
    renderedFrames: number;
    selectedUnits: UnitInstance[];
    selectedFormation: FormationType;
    selectionRectangle: Rectangle | null;
    mousePosition: Vector2;
    lastLeftClick: Vector2 | null;
    lastMoveClick: [Vector2, number] | null;
    camera: Vector2;
}

export type ClientStateAction = {
    name: 'DRAG_START',
    position: Vector2,
} | {
    name: 'HOTKEY_STOP',
} | {
    name: 'HOTKEY_DELETE',
} | {
    name: 'HOTKEY_SHIFT_DELETE',
} | {
    name: 'ARROW_LEFT',
}| {
    name: 'ARROW_RIGHT',
}| {
    name: 'ARROW_UP',
}| {
    name: 'ARROW_DOWN',
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
    name: 'DOUBLE_CLICK',
    position: Vector2,
} | {
    name: 'RIGHT_CLICK',
    position: Vector2,
} | {
    name: 'SHIFT_RIGHT_CLICK',
    position: Vector2,
} | {
    name: 'UNIT_DRAWN',
    hitBox: Rectangle,
    unit: UnitInstance,
} | {
    name: 'FRAME_RENDERING_STARTED',
} | {
    name: 'FIXATE_CAMERA',
    location: Vector2;
}  | {
    name: 'MOUSE_POSITIONED',
    position: Vector2,
};

export type GameDispatcher = (action: GameStateAction) => void;
export type ClientDispatcher = (action: ClientStateAction) => void;

export interface StateManagerInterface {
    init(): void;

    dispatchGame: GameDispatcher;
    dispatchClient: ClientDispatcher;

    getGameState(): GameState;

    getClientState(): ClientState;
}

export interface GameMode {
    start(dispatcher: GameDispatcher, gameState: GameState): void;
}

export interface EmittedPlayerLobbyMetadata {
    inRoom?: EmittedRoom;
    isSpectator?: boolean;
    playingAs?: number;
}

export interface EmittedRoom {
    id: RoomId;
    players: number;
    spectators: number;
    slots: number;
    status: RoomStatus;
    joinable: boolean;
}

export interface SlpFrame {
    cmdTableOffset: number;
    height: number;
    hotspot: { x: number; y: number; }
    outlineTableOffset: number;
    paletteOffset: number;
    properties: number;
    width: number;
}

export interface RenderedSlpFrame extends SlpFrame {
    rendered: {
        [key: number]: ImageBitmap;
    }
}

export interface UnitStats {
    attackFrameDelay: number;
    reloadTime: number;
    movementRate: number;
    hitPoints: number;
    attackRange: number;
    attackDamage: number;
    animations: {
        [key in UnitState]: {
            slp: string;
            underSlp?: string;
            animationDuration: number;
            style: AnimationStyle;
        }
    }
}

export interface Rectangle {
    p1: Vector2;
    p2: Vector2;
}

export interface FormationInterface {
    form(positions: Array<Vector2>, destination: Vector2): Array<Vector2>;
}

declare global {
    interface Window {
        ctx: CanvasRenderingContext2D;
    }
}
