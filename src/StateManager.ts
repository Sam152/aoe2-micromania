import {defaultState as defaultGameState, GameStateReducer} from "./GameState";
import {ClientStateReducer, defaultState as defaultClientState} from "./ClientState";
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from "./types";

class LocalStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;

    constructor() {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = ClientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        this.gameState = GameStateReducer(this.gameState, action);
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }
}

class NetworkedStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;

    constructor() {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = ClientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        // dispatch to server.
    }

    getClientState(): ClientState {
        return undefined;
    }

    getGameState(): GameState {
        return undefined;
    }
}

export {LocalStateManager, NetworkedStateManager}
