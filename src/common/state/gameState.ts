import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from '../game/UnitState';
import CompassDirection from '../game/CompassDirection';
import compassDirectionCalculator from "../game/compassDirectionCalculator";

function gameStateMutator(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        state.units.push({
            position: action.position,
            movingTo: null,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            unitStateStartedAt: state.ticks,
            direction: action.direction ?? CompassDirection.South,
        });
    }

    if (action.name === 'MOVE_UNIT_TO') {
        state.units.filter(instance => instance === action.unit).forEach(unitInstance => {
            unitInstance.movingTo = action.position;
            unitInstance.direction = compassDirectionCalculator.getDirection(unitInstance.position, unitInstance.movingTo);
            unitInstance.unitState = UnitState.Moving;
        });
    }

    if (action.name === 'STOP_UNIT') {
        state.units[action.id].movingTo = null;
    }

    if (action.name === 'TICK') {
        state.units.map(function(unit) {
            if (unit.movingTo) {
                unit.position.lerp(unit.movingTo, 0.1);
            }
            return unit;
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
