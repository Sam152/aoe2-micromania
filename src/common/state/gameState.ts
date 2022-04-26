import {GameState, GameStateAction, PlayerId} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import CompassDirection from '../units/CompassDirection';
import moveTowardsCurrentWaypoint from './mutations/moveTowardsCurrentWaypoint';
import formationManager from '../units/formations/FormationManager';
import stopUnit from './mutations/stopUnit';
import compassDirectionCalculator from '../units/compassDirectionCalculator';
import fireProjectiles from './mutations/fireProjectiles';
import moveUnits from './mutations/moveUnits';
import registerProjectileHits from './mutations/registerProjectileHits';
import unitMetadataFactory from '../units/unitMetadataFactory';
import unitsInGameState from "../util/unitsInGameState";
import registerUnitFallen from "./mutations/registerUnitFallen";

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'CLIENT_LOADED') {
        state.loadedPlayers.push(action.player);
    }
    if (action.name === 'GAME_MODE_STARTED') {
        state.gameModeStarted = true;
    }

    if (action.name === 'SPAWN_UNIT') {
        const stats = unitMetadataFactory.getUnit(action.unitType);
        state.units.push({
            id: state.idAt++,
            position: action.position,
            waypoints: [],
            clickedWaypoints: [],
            movingDirection: null,
            reloadsAt: 0,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
            hitPoints: stats.hitPoints,
        });
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => {
            unit.clickedWaypoints = [];
            unit.targetingUnit = null;
            unit.targetingPosition = null;
        });
        const positions = units.map((unit) => unit.position);
        formationManager.get(action.formation).form(positions, action.position).forEach((formationPosition, index) => {
            units[index].waypoints = [formationPosition];
            moveTowardsCurrentWaypoint(units[index]);
        });
    }
    if (action.name === 'ADD_WAYPOINT') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => {
            unit.clickedWaypoints.push(action.position);
            unit.targetingUnit = null;
        });
        const positions = units.map((unit) => unit.waypoints.at(-1) ?? unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints.push(formationPosition);
            if (units[index].unitState === UnitState.Idle) {
                moveTowardsCurrentWaypoint(units[index]);
            }
        });
    }

    if (action.name === 'STOP_UNITS') {
        unitsInGameState(state, action.units).forEach(unit => stopUnit(unit));
    }
    if (action.name === 'DELETE_UNITS') {
        unitsInGameState(state, action.units).forEach((deletedUnit) => registerUnitFallen(state, deletedUnit));
    }
    if (action.name === 'ATTACK') {
        const target = state.units.find(({id}) => action.target === id);
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            attackingUnit.targetingUnit = action.target;
            attackingUnit.direction = compassDirectionCalculator.getDirection(attackingUnit.position, target.position);
            attackingUnit.waypoints = [];
            attackingUnit.movingDirection = null;
        });
    }
    if (action.name === 'ATTACK_GROUND') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            attackingUnit.targetingPosition = action.position;
            attackingUnit.targetingUnit = null;
            attackingUnit.direction = compassDirectionCalculator.getDirection(attackingUnit.position, action.position);
            attackingUnit.waypoints = [];
            attackingUnit.movingDirection = null;
        });
    }

    if (action.name === 'TICK') {
        fireProjectiles(state);
        moveUnits(state);
        registerProjectileHits(state);
        ++state.ticks;
    }

    return state;
}

function defaultState(): GameState {
    return deepClone({
        ticks: 0,
        idAt: 0,
        units: [],
        projectiles: [],
        fallenUnits: [],
        mapSize: 14,
        loadedPlayers: [],
        gameModeStarted: false,
    });
}

export {defaultState, gameStateMutator};
