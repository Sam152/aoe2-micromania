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
    if (action.n === 'CLIENT_LOADED') {
        state.loadedPlayers.push(action.player);
    }
    if (action.n === 'GAME_MODE_STARTED') {
        state.gameModeStarted = true;
    }

    if (action.n === 'SPAWN_UNIT') {
        spawnUnit(state, action);
    }

    if (action.n === 'MOVE_UNITS_TO') {
        const units = unitsInGameState(state, action.units);
        moveTo(state, units, action.position);
    }
    if (action.n === 'ADD_WAYPOINT') {
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

    if (action.n === 'STOP_UNITS') {
        unitsInGameState(state, action.units).forEach((unit) => stopUnit(unit));
    }
    if (action.n === 'DELETE_UNITS') {
        unitsInGameState(state, action.units).forEach((deletedUnit) => registerUnitFallen(state, deletedUnit));
    }
    if (action.n === 'ATTACK') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingUnit = action.target;
        });
    }
    if (action.n === 'ATTACK_GROUND') {
        unitsInGameState(state, action.units).forEach((attackingUnit) => {
            stopUnit(attackingUnit);
            attackingUnit.targetingPosition = action.position;
        });
    }

    if (action.n === 'PATROL') {
        const units = unitsInGameState(state, action.units);
        patrolTo(state, units, action.position);
    }

    if (action.n === 'FORMATION_CHANGED') {
        changeFormation(state, action);
    }

    if (action.n === 'T') {
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
