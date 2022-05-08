import RoomStatus from './server/rooms/RoomStatus';
import UnitState from './common/units/UnitState';
import Unit from './common/units/Unit';
import CompassDirection from './common/units/CompassDirection';
import AnimationStyle from './common/units/AnimationStyle';
import {Vector2} from 'three/src/math/Vector2';
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
    reformingArrivalTick?: number;

    // A generic tick at which a unit is expected to complete some kind of movement action. This is helpful when
    // deciding a unit should stop or take a return patrol path, since it's difficult to know when a unit has reached
    // its destination by measuring its position alone, since movement speed can have a unit travel some distance OVER
    // its intended destination.
    arrivalTick?: number;

    // Basic vectors used in all movement states.
    movingDirection?: Vector2;
    position: Vector2;
    formation: FormationType;

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
    gameEnded: boolean;
}

export type UnitId = number;
export type RoomId = string;
export type PlayerId = number;

type GameStateAction = {
    n: 'T'; // Tick, reduced in size for a smaller transmission, could be an enum in the future.
} | {
    n: 'CLIENT_LOADED';
    player: number;
} | {
    n: 'SPECTATOR_LOADED';
} | {
    n: 'GAME_MODE_STARTED';
} | {
    n: 'GAME_ENDED';
    winner: PlayerId;
} | {
    n: 'SPAWN_UNIT';
    position: Vector2;
    unitType: Unit,
    forPlayer: PlayerId,
    direction?: CompassDirection,
} | {
    n: 'MOVE_UNITS_TO';
    position: Vector2;
    units: UnitId[];
} | {
    n: 'ADD_WAYPOINT';
    position: Vector2;
    units: UnitId[];
} | {
    n: 'STOP_UNITS';
    units: UnitId[];
} | {
    n: 'DELETE_UNITS';
    units: UnitId[];
} | {
    n: 'ATTACK';
    units: UnitId[];
    target: number;
} | {
    n: 'ATTACK_GROUND';
    units: UnitId[];
    position: Vector2;
} | {
    n: 'PATROL';
    units: UnitId[];
    position: Vector2;
} | {
    n: 'FORMATION_CHANGED';
    formation: FormationType;
    units: UnitId[];
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
    selectionRectangle: Rectangle | null;
    mousePosition: Vector2;
    lastLeftClick: Vector2 | null;
    lastMoveClick: [Vector2, number] | null;
    camera: Vector2;
}

export type ClientStateAction = {
    n: 'DRAG_START',
    position: Vector2,
} | {
    n: 'HOTKEY_STOP',
} | {
    n: 'HOTKEY_PATROL',
    position: Vector2,
} | {
    n: 'HOTKEY_ATTACK_GROUND',
} | {
    n: 'HOTKEY_DELETE',
} | {
    n: 'HOTKEY_SHIFT_DELETE',
} | {
    n: 'ARROW_LEFT',
}| {
    n: 'ARROW_RIGHT',
}| {
    n: 'ARROW_UP',
}| {
    n: 'ARROW_DOWN',
} | {
    n: 'DRAGGING',
    position: Vector2,
} | {
    n: 'DRAG_END',
    position: Vector2,
} | {
    n: 'LEFT_CLICK',
    position: Vector2,
} | {
    n: 'DOUBLE_CLICK',
    position: Vector2,
} | {
    n: 'RIGHT_CLICK',
    position: Vector2,
} | {
    n: 'SHIFT_RIGHT_CLICK',
    position: Vector2,
} | {
    n: 'UNIT_DRAWN',
    hitBox: Rectangle,
    unit: UnitInstance,
} | {
    n: 'FRAME_RENDERING_STARTED',
} | {
    n: 'FIXATE_CAMERA',
    location: Vector2;
} | {
    n: 'MOUSE_POSITIONED',
    position: Vector2,
} | {
    n: 'HOTKEY_CANCEL'
} | {
    n: 'HOTKEY_FORMATION_CHANGED',
    formation: FormationType,
};

export type GameDispatcher = (action: GameStateAction) => void;
export type ClientDispatcher = (action: ClientStateAction) => void;

export interface StateManagerInterface {
    init(): void;
    cleanUp(): void;

    dispatchGame: GameDispatcher;
    dispatchClient: ClientDispatcher;

    getGameState(): GameState;

    getClientState(): ClientState;
}

export interface GameMode {
    start(dispatcher: GameDispatcher, gameState: GameState): void;
}

export interface Ai {
    makeDecisions(state: GameState, action: GameStateAction, dispatcher: GameDispatcher): void;
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
    playersList: Array<{
        id: string;
        name: string;
    }>
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
    attackMinRange: number;
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
