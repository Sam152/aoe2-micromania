import {defaultState as defaultGameState, gameStateReducer} from './gameState';
import {clientStateReducer, defaultState as defaultClientState} from './clientState';
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from '../../types';

export const ticksPerSecond = 20;
export const gameSpeed = 1.7;

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
export default class LocalStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private gameStateListener: (state: GameState) => void;

    constructor(gameStateListener: (state: GameState) => void = null) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState();
        this.gameStateListener = gameStateListener;
    }

    dispatchClient(action: ClientStateAction): void {
        this.clientState = clientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction): void {
        this.gameState = gameStateReducer(this.gameState, action);
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
        setInterval(() => this.dispatchGame({name: 'TICK'}), 1000 / ticksPerSecond);
    }
}
