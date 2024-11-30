import { GameState, GameStateAction } from "../../types";
import deepClone from "../util/deepClone";
import UnitState from "../units/UnitState";
import formationManager from "../units/formations/FormationManager";
import stopUnit, { stopUnitExceptForWaypoints } from "./mutations/initiated/stopUnit";
import fireProjectiles from "./mutations/tick/fireProjectiles";
import moveUnits from "./mutations/tick/moveUnits";
import registerProjectileHits from "./mutations/tick/registerProjectileHits";
import unitsInGameState from "../util/unitsInGameState";
import registerUnitFallen from "./mutations/tick/registerUnitFallen";
import patrolUnits from "./mutations/tick/patrolUnits";
import reformUnits from "./mutations/tick/reformUnits";
import autoAttack from "./mutations/tick/autoAttack";
import patrolTo from "./mutations/initiated/patrolTo";
import spawnUnit from "./mutations/initiated/spawnUnit";
import moveTo from "./mutations/initiated/moveTo";
import changeFormation from "./mutations/initiated/changeFormation";
import { setUnitMovementTowardsCurrentWaypoint } from "./mutations/initiated/setUnitMovementTowards";
import { snapToClamp } from "../util/snapToClamp";
import provisionPlayer from "./mutations/players/provisionPlayer";
import deprovisionPlayer from "./mutations/players/deprovisionPlayer";

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
  if (action.n === "CLIENT_LOADED_WITH_ID") {
    provisionPlayer(state, action);
  }
  if (action.n === "CLIENT_DISCONNECTED_WITH_ID") {
    deprovisionPlayer(state, action.playerId);
  }
  if (action.n === "SPAWN_UNIT") {
    spawnUnit(state, action);
  }
  if (action.n === "MOVE_UNITS_TO") {
    const units = unitsInGameState(state, action.units);
    moveTo(state, units, action.position);
  }
  if (action.n === "ADD_WAYPOINT") {
    const units = unitsInGameState(state, action.units);
    units.forEach((unit) => {
      unit.clickedWaypoints.push(action.position);
      stopUnitExceptForWaypoints(unit);
    });
    const positions = units.map((unit) => unit.waypoints.at(-1) ?? unit.position);
    formationManager
      .fromPopulation(units)
      .form(positions, action.position)
      .map((formationPosition, index) => {
        units[index].waypoints.push(snapToClamp(formationPosition, state.mapSize));
        if (units[index].unitState === UnitState.Idle) {
          setUnitMovementTowardsCurrentWaypoint(state, units[index]);
        }
      });
  }

  if (action.n === "STOP_UNITS") {
    unitsInGameState(state, action.units).forEach((unit) => stopUnit(unit));
  }
  if (action.n === "DELETE_UNITS") {
    unitsInGameState(state, action.units).forEach((deletedUnit) => registerUnitFallen(state, deletedUnit));
  }
  if (action.n === "ATTACK") {
    unitsInGameState(state, action.units).forEach((attackingUnit) => {
      stopUnit(attackingUnit);
      attackingUnit.targetingUnit = action.target;
    });
  }
  if (action.n === "ATTACK_GROUND") {
    unitsInGameState(state, action.units).forEach((attackingUnit) => {
      stopUnit(attackingUnit);
      attackingUnit.targetingPosition = action.position;
    });
  }

  if (action.n === "PATROL") {
    const units = unitsInGameState(state, action.units);
    patrolTo(state, units, action.position);
  }

  if (action.n === "FORMATION_CHANGED") {
    changeFormation(state, action);
  }

  if (action.n === "T") {
    state.soundQueue = [];

    moveUnits(state);
    reformUnits(state);
    patrolUnits(state);
    fireProjectiles(state);
    autoAttack(state);
    registerProjectileHits(state);

    ++state.ticks;
  }

  if (action.n === "MAP_PARAMETERS_SET") {
    state.mapSize = action.size;
    state.mapTerrain = action.terrain;
  }

  return state;
}

function defaultState(): GameState {
  return deepClone({
    ticks: 0,
    idAt: 0,

    activePlayers: {},
    queuedPlayers: [],

    units: [],
    projectiles: [],
    fallenUnits: [],

    gameEnded: false,
    winner: null,

    soundQueue: [],

    mapSize: 18,
    mapTerrain: "terrain/15010-desert",
  });
}

export { defaultState, gameStateMutator };
