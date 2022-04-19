import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import CompassDirection from '../units/CompassDirection';
import unitMetadataFactory from "../units/unitMetadataFactory";
import config from "../config";
import moveTowardsCurrentWaypoint from "./mutations/moveTowardsCurrentWaypoint";
import formationManager from "../units/formations/FormationManager";
import stopUnit from "./mutations/stopUnit";

let unitId = 0;

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        state.units.push({
            id: unitId++,
            position: action.position,
            waypoints: [],
            clickedWaypoints: [],
            movingDirection: null,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
        });
    }

    if (action.name === 'MOVE_UNITS_TO') {
        const units = state.units.filter(instance => action.units.includes(instance.id));
        units.forEach(unit => {
            unit.clickedWaypoints = [];
        });
        const positions = units.map(unit => unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints = [formationPosition];
            moveTowardsCurrentWaypoint(units[index]);
        });
    }

    if (action.name === 'ADD_WAYPOINT') {
        const units = state.units.filter(instance => action.units.includes(instance.id));
        units.forEach(unit => {
            unit.clickedWaypoints.push(action.position);
        });
        const positions = units.map(unit => unit.waypoints.at(-1) ?? unit.position);
        formationManager.get(action.formation).form(positions, action.position).map((formationPosition, index) => {
            units[index].waypoints.push(formationPosition);
            if (units[index].unitState === UnitState.Idle) {
                moveTowardsCurrentWaypoint(units[index]);
            }
        });
    }

    if (action.name === 'STOP_UNITS') {
        state.units.filter(instance => action.units.includes(instance.id)).forEach(unit => {
           stopUnit(unit);
        });
    }

    if (action.name === 'TICK') {
        state.units.filter(unit => unit.waypoints.length > 0).map(function(unit) {
            unit.position.add(unit.movingDirection.clone().multiplyScalar(unitMetadataFactory.getUnit(unit.unitType).movementRate * config.unitSpeedFactor));
            if (unit.position.distanceTo(unit.waypoints[0]) < 5) {
                unit.waypoints.shift();
                if (unit.waypoints.length) {
                    moveTowardsCurrentWaypoint(unit);
                }
                else {
                    stopUnit(unit);
                }
            }
        });
        ++state.ticks;
    }

    return state;
}

function defaultState(): GameState {
    return deepClone({
        ticks: 0,
        units: [],
        mapSize: 40,
    });
}

export {defaultState, gameStateMutator};
