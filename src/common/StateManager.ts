import {defaultState as defaultGameState, GameStateReducer} from "./GameState";
import {ClientStateReducer, defaultState as defaultClientState} from "./ClientState";
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from "../types";
import {Socket} from "socket.io-client";

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
class LocalStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private gameStateListener: (state: GameState) => void;

    constructor(gameStateListener: (state: GameState) => void = null) {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
        this.gameStateListener = gameStateListener;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = ClientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        this.gameState = GameStateReducer(this.gameState, action);
        if (this.gameStateListener) {
            this.gameStateListener(this.gameState);
        }
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        setInterval(() => this.dispatchGame({name: "TICK"}), 33);
    }
}

/**
 * A state manager with a client => server relationship.
 */
class NetworkedStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private socket: Socket;

    constructor(socket: Socket) {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
        this.socket = socket;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = ClientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        this.socket.emit('stateDispatch', action);
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        this.socket.on('updateState', (serverState) => this.gameState = serverState);
    }
}

export {LocalStateManager, NetworkedStateManager}
