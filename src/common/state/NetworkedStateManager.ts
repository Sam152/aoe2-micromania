import {defaultState as defaultGameState, gameStateReducer} from './gameState';
import {clientStateReducer, defaultState as defaultClientState} from './clientState';
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from '../../types';
import {Socket} from 'socket.io-client';

/**
 * A state manager with a client => server relationship.
 */
export default class NetworkedStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private socket: Socket;

    constructor(socket: Socket) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState();
        this.socket = socket;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = clientStateReducer(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
    // @todo, a local tick and state could also be invoked for interpolation, when network latency is high.
        this.socket.emit('stateDispatch', action);
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        this.socket.on('gameStateUpdated', (serverState) => this.gameState = serverState);
    }
}
