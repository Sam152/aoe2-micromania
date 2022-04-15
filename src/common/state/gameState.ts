import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../game/UnitState';
import CompassDirection from '../game/CompassDirection';
import compassDirectionCalculator from "../game/compassDirectionCalculator";
import unitMetadataFactory from "../game/unitMetadataFactory";
import engineConfiguration from "../game/engineConfiguration";

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
            console.log(action.position.clone().sub(unit.movingTo));
            console.log(unit.movingDirection);
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
