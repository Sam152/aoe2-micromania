import RoomStatus from './server/rooms/RoomStatus';
import UnitState from './common/units/UnitState';
import Unit from './common/units/Unit';
import CompassDirection from './common/units/CompassDirection';
import AnimationStyle from './common/units/AnimationStyle';
import {Vector2} from 'three';
import FormationType from './common/units/formations/FormationType';
import ProjectileType from './common/units/ProjectileType';
import ActiveCommand from './common/input/ActiveCommand';

export interface UnitInstance {
    id: number;
    ownedByPlayer: PlayerId;
    unitType: Unit;

    unitStateStartedAt: number;
    unitState: UnitState;
    direction: CompassDirection;

    targetingUnit?: number;
    targetingPosition?: Vector2;
    reloadsAt: number;

    // A movement state that is an instruction to move to a specific location.
    waypoints: Array<Vector2>;
    clickedWaypoints: Array<Vector2>;

    // A movement state that patrols the unit between two locations.
    patrollingTo?: Vector2;
    patrollingToReturn?: Vector2;

    // A movement state that is a unit getting into a formation before executing some other movement state.
    reformingTo?: Vector2;
    reformingSpeedFactor?: number;

    // Basic vectors used in all movement states.
    movingDirection?: Vector2;
    position: Vector2;

    hitPoints: number;
}

export interface FallenUnitInstance {
    id: number;
    ownedByPlayer: PlayerId;
    unitType: Unit;
    unitFallenAt: number;
    position: Vector2;
    direction: CompassDirection;
}

export interface ProjectileInstance {
    id: number;
    ownedBy: PlayerId;
    type: ProjectileType;
    firedByType: Unit;
    targeting?: PlayerId;
    startingPoint: Vector2;
    destination: Vector2;
    pathVector: Vector2;
    startingTick: number;
    arrivingTick: number;
    hasDamage: boolean;
}

export interface RendererInterface {
    render: (gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher) => void;
    bootUp: () => Promise<void>;
}

export type StateTransmitter = (clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher) => void;

export interface GameState {
    ticks: number;
    idAt: 0;
    units: UnitInstance[];
    projectiles: ProjectileInstance[];
    fallenUnits: FallenUnitInstance[];
    mapSize: number;
    loadedPlayers: Array<PlayerId>;
    gameModeStarted: boolean;
}

export type UnitId = number;
export type RoomId = string;
export type ClientId = string;
export type PlayerId = number;

type GameStateAction = {
    name: 'TICK';
} | {
    name: 'CLIENT_LOADED';
    player: number;
} | {
    name: 'SPECTATOR_LOADED';
} | {
    name: 'GAME_MODE_STARTED';
} | {
    name: 'SPAWN_UNIT';
    position: Vector2;
    unitType: Unit,
    forPlayer: PlayerId,
    direction?: CompassDirection,
} | {
    name: 'MOVE_UNITS_TO';
    position: Vector2;
    units: UnitId[];
    formation: FormationType;
} | {
    name: 'ADD_WAYPOINT';
    position: Vector2;
    units: UnitId[];
    formation: FormationType;
} | {
    name: 'STOP_UNITS';
    units: UnitId[];
} | {
    name: 'DELETE_UNITS';
    units: UnitId[];
} | {
    name: 'ATTACK';
    units: UnitId[];
    target: number;
} | {
    name: 'ATTACK_GROUND';
    units: UnitId[];
    position: Vector2;
} | {
    name: 'PATROL';
    formation: FormationType;
    units: UnitId[];
    position: Vector2;
};

export interface ClientState {
    unitHitBoxes: Array<{
        hitBox: Rectangle,
        unit: UnitInstance,
    }>;
    playingAs: number;
    renderedFrames: number;
    selectedUnits: Array<UnitId>;
    activeCommand: ActiveCommand;
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
    name: 'HOTKEY_PATROL',
    position: Vector2,
} | {
    name: 'HOTKEY_ATTACK_GROUND',
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
} | {
    name: 'MOUSE_POSITIONED',
    position: Vector2,
} | {
    name: 'HOTKEY_CANCEL'
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
    firesProjectileType: ProjectileType;
    reloadTime: number;
    movementRate: number;
    hitPoints: number;
    attackRange: number;
    attackDamage: number;
    areaOfEffect: Array<{ distanceFromTarget: number; percentageOfAttack: number; }> | null;
    firingAnchor: Vector2;
    selectionRadius: number;
    hitBox: Rectangle;
    hitPointsBarAnchor: number;
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
