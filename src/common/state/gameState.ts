import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import formationManager from '../units/formations/FormationManager';
import stopUnit, {stopUnitExceptForWaypoints} from './mutations/initiated/stopUnit';
import fireProjectiles from './mutations/tick/fireProjectiles';
import moveUnits from './mutations/tick/moveUnits';
import registerProjectileHits from './mutations/tick/registerProjectileHits';
import unitsInGameState from '../util/unitsInGameState';
import registerUnitFallen from './mutations/tick/registerUnitFallen';
import patrolUnits from './mutations/tick/patrolUnits';
import reformUnits from './mutations/tick/reformUnits';
import autoAttack from './mutations/tick/autoAttack';
import patrolTo from './mutations/initiated/patrolTo';
import spawnUnit from './mutations/initiated/spawnUnit';
import moveTo from './mutations/initiated/moveTo';
import changeFormation from './mutations/initiated/changeFormation';
import {setUnitMovementTowardsCurrentWaypoint} from './mutations/initiated/setUnitMovementTowards';

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'CLIENT_LOADED') {
        state.loadedPlayers.push(action.player);
    }
    if (action.name === 'GAME_MODE_STARTED') {
        state.gameModeStarted = true;
    }

    if (action.name === 'SPAWN_UNIT') {
        spawnUnit(state, action);
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = unitsInGameState(state, action.units);
        moveTo(state, units, action.position);
    }
    if (action.name === 'ADD_WAYPOINT') {
        const units = unitsInGameState(state, action.units);
        units.forEach((unit) => {
            unit.clickedWaypoints.push(action.position);
            stopUnitExceptForWaypoints(unit);
        });
        const positions = units.map((unit) => unit.waypoints.at(-1) ?? unit.position);
        formationManager.fromPopulation(units).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints.push(formationPosition);
            if (units[index].unitState === UnitState.Idle) {
                setUnitMovementTowardsCurrentWaypoint(state, units[index]);
            }
        });
    }

    if (action.name === 'STOP_UNITS') {
        unitsInGameState(state, action.units).forEach((unit) => stopUnit(unit));
    }
    if (action.name === 'DELETE_UNITS') {
        unitsInGameState(state, action.units).forEach((deletedUnit) => registerUnitFallen(state, deletedUnit));
    }
    if (action.name === 'ATTACK') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingUnit = action.target;
        });
    }
    if (action.name === 'ATTACK_GROUND') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingPosition = action.position;
        });
    }

    if (action.name === 'PATROL') {
        const units = unitsInGameState(state, action.units);
        patrolTo(state, units, action.position);
    }

    if (action.name === 'FORMATION_CHANGED') {
        changeFormation(state, action);
    }

    if (action.name === 'TICK') {
        moveUnits(state);
        reformUnits(state);
        patrolUnits(state);
        fireProjectiles(state);
        autoAttack(state);
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
        mapSize: 18,
        loadedPlayers: [],
        gameModeStarted: false,
    });
}

export {defaultState, gameStateMutator};
