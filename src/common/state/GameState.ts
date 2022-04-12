import {GameState, GameStateAction} from "../../types";

function GameStateReducer(state: GameState, action: GameStateAction): GameState {
    if (action.name === 'SPAWN_UNIT') {
        return {
            ...state,
            units: [
                ...state.units,
                {
                    position: action.position,
                    movingTo: null,
                }]
        };
    }

    if (action.name === 'MOVE_UNIT_TO') {
        state.units[action.id].movingTo = action.position;
        return state;
    }

    if (action.name === 'STOP_UNIT') {
        state.units[action.id].movingTo = null;
        return state;
    }

    if (action.name === 'TICK') {
        return {
            ...state,
            units: state.units.map(function(unit) {
                if (unit.movingTo) {
                    unit.position.x++;
                    unit.position.y++;
                }
                return unit;
            }),
        }
    }

    return {...state};
}

const defaultState: GameState = {
    units: [],
    projectiles: [],
    players: [],
};

export {defaultState, GameStateReducer};
