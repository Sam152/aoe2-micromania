import {GameState, GameStateAction} from "../types";

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
        return {
            ...state,
            units: [
                ...state.units.slice(0, action.id),
                {
                    ...state.units[action.id],
                    movingTo: action.position,
                },
                ...state.units.slice(action.id + 1),
            ]
        }
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
