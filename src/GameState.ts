import {GameState, GameStateAction} from "./types";

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

    return {...state};
}

const defaultState: GameState = {
    units: [],
    projectiles: [],
    players: [],
};

export {defaultState, GameStateReducer};
