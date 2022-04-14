import {GameState, GameStateAction} from '../../types';
import deepClone from '../util/deepClone';
import UnitState from "../game/UnitState";
import CompassDirection from "../game/CompassDirection";

function gameStateReducer(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        state.units.push({
            position: action.position,
            movingTo: null,
            ownedByPlayer: action.forPlayer,
            unitType: action.unitType,
            unitState: UnitState.Idle,
            direction: CompassDirection.North,
        });
    }

    if (action.name === 'MOVE_UNIT_TO') {
        state.units[action.id].movingTo = action.position;
    }

    if (action.name === 'STOP_UNIT') {
        state.units[action.id].movingTo = null;
    }

    if (action.name === 'TICK') {
        state.units.map(function(unit) {
            if (unit.movingTo) {
                unit.position.x++;
                unit.position.y++;
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

export {defaultState, gameStateReducer};
