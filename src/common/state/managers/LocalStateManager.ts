import {defaultState as defaultGameState, gameStateMutator} from '../gameState';
import {clientStateMutator, defaultState as defaultClientState} from '../clientState';
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from '../../../types';
import config from "../../config";

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
export default class LocalStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private gameStateListener: (state: GameState, action: GameStateAction) => void;

    constructor(gameStateListener: (state: GameState, action: GameStateAction) => void = null) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState();
        this.gameStateListener = gameStateListener;
    }

    dispatchClient(action: ClientStateAction): void {
        this.clientState = clientStateMutator(this.clientState, action);
    }

    dispatchGame(action: GameStateAction): void {
        this.gameState = gameStateMutator(this.gameState, action);
        if (this.gameStateListener) {
            this.gameStateListener(this.gameState, action);
        }
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        setInterval(() => this.dispatchGame({name: 'TICK'}), 1000 / config.ticksPerSecond);
    }
}
