import {ClientState, ClientStateAction, GameState} from '../../types';
import deepClone from '../util/deepClone';

function clientStateReducer(state: ClientState, action: ClientStateAction): ClientState {
    return state;
}

function defaultState(): ClientState {
    return deepClone({
        units: [],
        projectiles: [],
        players: [],
    });
}

export {defaultState, clientStateReducer};
