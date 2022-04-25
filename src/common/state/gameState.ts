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
import unitMetadataFactory from "../units/unitMetadataFactory";

let unitId = 0;

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        const stats = unitMetadataFactory.getUnit(action.unitType);
        state.units.push({
            id: unitId++,
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
            hp: stats.hitPoints,
        });
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = state.units.filter((instance) => action.units.includes(instance.id));
        units.forEach((unit) => {
            unit.clickedWaypoints = [];
            unit.targetingUnit = null;
            unit.targetingPosition = null;
        });
        const positions = units.map((unit) => unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints = [formationPosition];
            moveTowardsCurrentWaypoint(units[index]);
        });
    }

    if (action.name === 'ADD_WAYPOINT') {
        const units = state.units.filter((instance) => action.units.includes(instance.id));
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
        state.units.filter((instance) => action.units.includes(instance.id)).forEach((unit) => {
            stopUnit(unit);
        });
    }
    if (action.name === 'DELETE_UNITS') {
        const deletedUnits = state.units.filter((instance) => action.units.includes(instance.id));
        state.units = state.units.filter((instance) => !action.units.includes(instance.id));
        deletedUnits.forEach((deletedUnit) => {
            state.fallenUnits.push({
                id: deletedUnit.id,
                ownedByPlayer: deletedUnit.ownedByPlayer,
                unitType: deletedUnit.unitType,
                unitFallenAt: state.ticks,
                position: deletedUnit.position,
                direction: deletedUnit.direction,
            });
        });
    }

    if (action.name === 'ATTACK') {
        const attackingUnits = state.units.filter(({id}) => action.units.includes(id));
        const target = state.units.find(({id}) => action.target === id);
        attackingUnits.forEach((attackingUnit) => {
            attackingUnit.targetingUnit = action.target;
            attackingUnit.direction = compassDirectionCalculator.getDirection(attackingUnit.position, target.position);
            attackingUnit.waypoints = [];
            attackingUnit.movingDirection = null;
        });
    }
    if (action.name === 'ATTACK_GROUND') {
        const attackingUnits = state.units.filter(({id}) => action.units.includes(id));
        attackingUnits.forEach((attackingUnit) => {
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
        units: [],
        projectiles: [],
        fallenUnits: [],
        mapSize: 20,
    });
}

export {defaultState, gameStateMutator};
