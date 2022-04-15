import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../units/UnitState';
import CompassDirection from '../units/CompassDirection';
import compassDirectionCalculator from "../units/compassDirectionCalculator";
import unitMetadataFactory from "../units/unitMetadataFactory";
import engineConfiguration from "../units/engineConfiguration";

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        state.units.push({
            position: action.position,
            movingTo: null,
            movingDirection: null,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
        });
    }

    if (action.name === 'MOVE_UNIT_TO') {
        state.units.filter(instance => instance === action.unit).forEach(unit => {
            unit.movingTo = action.position;
            unit.movingDirection = unit.movingTo.clone().sub(unit.position).normalize();
            unit.direction = compassDirectionCalculator.getDirection(unit.position, unit.movingTo);
            unit.unitState = UnitState.Moving;
        });
    }

    if (action.name === 'STOP_UNIT') {
        state.units[action.id].movingTo = null;
    }

    if (action.name === 'TICK') {
        state.units.filter(unit => unit.movingTo !== null).map(function(unit) {
            unit.position.add(unit.movingDirection.clone().multiplyScalar(unitMetadataFactory.getUnit(unit.unitType).movementRate * engineConfiguration.unitSpeedFactor));
            if (unit.position.distanceTo(unit.movingTo) < 10) {
                unit.movingTo = null;
                unit.movingDirection = null;
                unit.unitState = UnitState.Idle;
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
        projectiles: [],
        players: [],
    });
}

export {defaultState, gameStateMutator};
