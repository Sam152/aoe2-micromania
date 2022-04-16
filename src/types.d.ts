import RoomStatus from './common/rooms/RoomStatus';
import UnitState from './common/units/UnitState';
import Unit from './common/units/Unit';
import CompassDirection from './common/units/CompassDirection';
import AnimationStyle from './common/units/AnimationStyle';
import {Vector2} from "three";

export interface UnitInstance {
    id: number;
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitState: UnitState;
    unitStateStartedAt: number;

    position: Vector2;
    movingTo?: Vector2;
    movingDirection?: Vector2;
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
    name: 'MOVE_UNIT_TO';
    position: Vector2;
    unit: number;
} | {
    name: 'STOP_UNIT';
    id: number;
};

export interface ClientState {
    unitHitBoxes: Array<{
        hitBox: Rectangle,
        unit: UnitInstance,
    }>;
    selectedUnits: UnitInstance[];
    selectionRectangle: Rectangle | null;
    lastLeftClick: Vector2 | null;
}

export type ClientStateAction = {
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
    start(dispatcher: GameDispatcher): void;
}

export interface EmittedPlayerLobbyMetadata {
    inRoom?: EmittedRoom;
    isSpectator?: boolean;
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
            animationDuration: number;
            style: AnimationStyle;
        }
    }
}

export interface Rectangle {
    p1: Vector2;
    p2: Vector2;
}
