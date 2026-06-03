import { UnitState } from "./common/units/UnitState.ts";
import { UnitType } from "./common/units/UnitType.ts";
import { CompassDirection } from "./common/units/CompassDirection.ts";
import { AnimationStyle } from "./common/units/AnimationStyle.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { FormationType } from "./common/units/formations/FormationType.ts";
import { ProjectileType } from "./common/units/ProjectileType.ts";
import { ActiveCommand } from "./common/input/ActiveCommand.ts";
import { Hotkey } from "./common/input/Hotkey.ts";
import { DamageType } from "./common/units/DamageType.ts";
import { Sound } from "./common/sounds/Sound.ts";
import { AccuracyFunction } from "./common/state/mutations/tick/applyAccuracy.ts";
import { GameStateListener, PreTickListener } from "./common/state/managers/GameStateListener.ts";

export interface UnitInstance {
  id: number;
  ownedByPlayer: PlayerId;
  unitType: UnitType;

  unitStateStartedAt: number;
  unitState: UnitState;
  direction: CompassDirection;

  targetingUnit?: number;
  targetingPosition?: Vector2;
  reloadsAt: number;

  convertingUnit?: number;
  conversionSucceedsAt?: number;
  conversionJuiceFullAt?: number;

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
  // Direction representing the last place that a specific move command was issued to,
  // useful for changing formation of stationary units.
  lastCommandedDirection?: Vector2;
  position: Vector2;
  formation: FormationType;

  // The speed of the slowest unit in a group.
  groupMovementSpeed?: number;

  hitPoints: number;
}

export interface FallenUnitInstance {
  id: number;
  ownedByPlayer: PlayerId;
  unitType: UnitType;
  unitFallenAt: number;
  position: Vector2;
  direction: CompassDirection;
}

export interface ProjectileInstance {
  id: number;
  ownedBy: PlayerId;
  type: ProjectileType;
  firedByType: UnitType;
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
  cleanUp: () => void;
}

export type StateTransmitter = (
  clientState: ClientState,
  gameState: GameState,
  action: ClientStateAction,
  gameDispatcher: GameDispatcher,
) => void;

export interface GameState {
  ticks: number;
  idAt: number;

  activePlayers: Record<string, number>;
  queuedPlayers: string[];

  units: UnitInstance[];
  projectiles: ProjectileInstance[];
  fallenUnits: FallenUnitInstance[];

  soundQueue: Sound[];

  gameEnded: boolean;
  winner?: PlayerId;

  mapSize: number;
  mapTerrain: string;
}

export type UnitId = number;
export type RoomId = string;
export type PlayerId = number;

export type GameStateAction =
  | {
    n: "T"; // Tick, reduced in size for a smaller transmission, could be an enum in the future.
    // Send the number of ticks in state, down the pipe at the same time, for desync protection.
    t: number;
  }
  | {
    n: "CLIENT_LOADED";
  }
  | {
    n: "SPECTATE_CLIENT_LOADED";
  }
  | {
    n: "CYCLE_PLAYER";
    playerId: string;
    playerNumber: number;
  }
  | {
    n: "CLIENT_LOADED_WITH_ID";
    playerId: string;
  }
  | {
    n: "CLIENT_DISCONNECTED_WITH_ID";
    playerId: string;
  }
  | {
    n: "SPAWN_UNIT";
    position: Vector2;
    unitType: UnitType;
    forPlayer: PlayerId;
    direction?: CompassDirection;
  }
  | {
    n: "MOVE_UNITS_TO";
    position: Vector2;
    units: UnitId[];
  }
  | {
    n: "ADD_WAYPOINT";
    position: Vector2;
    units: UnitId[];
  }
  | {
    n: "STOP_UNITS";
    units: UnitId[];
  }
  | {
    n: "DELETE_UNITS";
    units: UnitId[];
  }
  | {
    n: "ATTACK";
    units: UnitId[];
    target: number;
  }
  | {
    n: "START_CONVERSION";
    units: UnitId[];
    target: number;
  }
  | {
    n: "ATTACK_GROUND";
    units: UnitId[];
    position: Vector2;
  }
  | {
    n: "PATROL";
    units: UnitId[];
    position: Vector2;
  }
  | {
    n: "FORMATION_CHANGED";
    formation: FormationType;
    units: UnitId[];
  }
  | {
    n: "MAP_PARAMETERS_SET";
    terrain: string;
    size: number;
  };

export interface ClientState {
  unitHitBoxes: Array<{
    hitBox: Rectangle;
    unit: UnitInstance;
  }>;
  clientId: string;
  renderedFrames: number;
  selectedUnits: Array<UnitId>;
  activeCommand: ActiveCommand;
  selectionRectangle: Rectangle | null;
  mousePosition: Vector2;
  lastLeftClick: Vector2 | null;
  lastMoveClick: [Vector2, number] | null;
  lastAttackedUnit: [UnitId, number] | null;
  camera: Vector2;
  controlGroups: {
    [key: number]: Array<UnitId>;
  };
  soundQueue: Sound[];
  cursorLocked: boolean;
  framesPerTick: number;

  anchored: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };

  canvas: {
    width: number;
    height: number;
    scale: number;
  };
}

export type ClientStateAction =
  | {
    n: "DRAG_START";
    position: Vector2;
  }
  | {
    n: "HOTKEY_STOP";
  }
  | {
    n: "HOTKEY_PATROL";
    position: Vector2;
  }
  | {
    n: "HOTKEY_ATTACK_GROUND";
  }
  | {
    n: "HOTKEY_DELETE";
  }
  | {
    n: "HOTKEY_SHIFT_DELETE";
  }
  | {
    n: "ARROW_LEFT";
  }
  | {
    n: "ARROW_RIGHT";
  }
  | {
    n: "ARROW_UP";
  }
  | {
    n: "ARROW_DOWN";
  }
  | {
    n: "DRAGGING";
    shift: boolean;
    position: Vector2;
  }
  | {
    n: "DRAG_END";
    position: Vector2;
  }
  | {
    n: "LEFT_CLICK";
    shift: boolean;
    position: Vector2;
  }
  | {
    n: "DOUBLE_CLICK";
    shift: boolean;
    position: Vector2;
  }
  | {
    n: "RIGHT_CLICK";
    position: Vector2;
  }
  | {
    n: "SHIFT_RIGHT_CLICK";
    position: Vector2;
  }
  | {
    n: "UNIT_DRAWN";
    hitBox: Rectangle;
    unit: UnitInstance;
  }
  | {
    n: "FRAME_RENDERING_STARTED";
  }
  | {
    n: "FIXATE_CAMERA";
    location: Vector2;
  }
  | {
    n: "MOUSE_POSITIONED";
    position: Vector2;
  }
  | {
    n: "HOTKEY_CANCEL";
  }
  | {
    n: "HOTKEY_FORMATION_CHANGED";
    formation: FormationType;
  }
  | {
    n: "CONTROL_GROUP_ASSIGNED";
    group: number;
  }
  | {
    n: "CONTROL_GROUP_SELECTED";
    group: number;
  }
  | {
    n: "GAME_STATE_REHYDRATED";
  }
  | {
    n: "CURSOR_LOCK_CHANGED";
    locked: boolean;
  }
  | {
    n: "CANVAS_CHANGED";
    canvasHeight: number;
    canvasWidth: number;
    scale: number;
  }
  | {
    n: "FRAMES_PER_TICK_MEASURED";
    framesPerTick: number;
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

  addGameStateListener(listener: GameStateListener): void;

  addPreTickListener(listener: PreTickListener): void;

  addClientStateListener(listener: (state: ClientState, action: ClientStateAction) => void): void;
}

export interface GameMode {
  start(stateManager: StateManagerInterface): void;
}

export interface Ai {
  makeDecisions(state: GameState, action: GameStateAction, dispatcher: GameDispatcher): void;
}

export interface SlpFrame {
  cmdTableOffset: number;
  height: number;
  hotspot: { x: number; y: number };
  outlineTableOffset: number;
  paletteOffset: number;
  properties: number;
  width: number;
}

export interface UnitStats {
  attackFrameDelay: number;
  firesProjectileType: ProjectileType;
  damageType: DamageType;
  armor: { [key in DamageType]: number };
  reloadTime: number;
  movementRate: number;
  hitPoints: number;
  attackRange: number;
  attackMinRange: number;
  attackDamage: number;
  areaOfEffect: Array<{ distanceFromTarget: number; percentageOfAttack: number }> | null;
  firingAnchor: Vector2;
  selectionRadius: number;
  hitBox: number;
  hitPointsBarAnchor: number;
  accuracyFunction: AccuracyFunction;
  animations: {
    [key in UnitState]: {
      slp: string;
      animationDuration: number;
      style: AnimationStyle;
    };
  };
}

export interface Rectangle {
  p1: Vector2;
  p2: Vector2;
}

export interface FormationInterface {
  form(positions: UnitInstance[], destination: Vector2): Array<Vector2>;
}

export interface ReplayIndexItem {
  start: number;
  end: number;
  engineVersion: number;
  players: Array<string>;
  id: string;
}

export interface ReplayItem extends ReplayIndexItem {
  actions: Array<GameStateAction>;
}

export type HotkeyScheme = {
  [key in Hotkey]: number;
};

export type Line = [Vector2, Vector2];

declare global {
  interface Window {
    ctx: CanvasRenderingContext2D;
  }
}
