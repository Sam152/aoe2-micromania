import {defaultState as defaultGameState, gameStateMutator} from '../gameState';
import {clientStateMutator, defaultState as defaultClientState} from '../clientState';
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from '../../../types';
import config from '../../config';

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
export default class LocalStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private gameStateListeners: Array<(state: GameState, action: GameStateAction) => void>;
    private ticker: NodeJS.Timer;
    private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;

    constructor(playingAs: number | null = 1) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState(playingAs);
        this.gameStateListeners = [];
        this.clientStateListeners = [];
    }

    addGameStateListener(listener: (state: GameState, action: GameStateAction) => void): void {
        this.gameStateListeners.push(listener);
    }

    addClientStateListener(listener: (state: ClientState, action: ClientStateAction) => void): void {
        this.clientStateListeners.push(listener);
    }

    dispatchClient(action: ClientStateAction): void {
        this.clientState = clientStateMutator(this.clientState, action);
        this.clientStateListeners.forEach(clientStateListener => {
            clientStateListener(this.clientState, action);
        });
    }

    dispatchGame(action: GameStateAction): void {
        this.gameState = gameStateMutator(this.gameState, action);
        this.gameStateListeners.forEach(gameStateListener => {
            gameStateListener(this.gameState, action);
        });
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        this.ticker = setInterval(() => this.dispatchGame({n: 'T'}), 1000 / config.ticksPerSecond);
    }

    cleanUp(): void {
        clearInterval(this.ticker);
    }
}
