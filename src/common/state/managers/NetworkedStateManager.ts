import {defaultState as defaultGameState, gameStateMutator} from '../gameState';
import {clientStateMutator, defaultState as defaultClientState} from '../clientState';
import {
    ClientState,
    ClientStateAction,
    GameState,
    GameStateAction,
    StateManagerInterface,
} from '../../../types';
import {Socket} from 'socket.io-client';
import {normalizeGameStateAction, normalizeGameStateObject} from '../../util/normalizer';
import TransportEvent from "../transport/TransportEvent";

/**
 * A state manager with a client => server relationship.
 */
export default class NetworkedStateManager implements StateManagerInterface {
    private gameState: GameState;
    private clientState: ClientState;
    private socket: Socket;
    private onActionCallback: (action: GameStateAction, state: GameState) => void;

    constructor(socket: Socket, playingAs: number, onActionCallback: ((action: GameStateAction, state: GameState) => void) | null = null) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState(playingAs);
        this.socket = socket;
        this.onActionCallback = onActionCallback;
    }

    dispatchClient(action: ClientStateAction) {
        this.clientState = clientStateMutator(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        this.socket.emit(TransportEvent.GameStateActionDispatch, action);
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        this.socket.off(TransportEvent.GameStateActionTransmit);
        this.socket.off(TransportEvent.WholeGameStateTransmit);

        this.socket.on(TransportEvent.WholeGameStateTransmit, (serverState) => {
            this.gameState = normalizeGameStateObject(serverState);
        });
        this.socket.on(TransportEvent.GameStateActionTransmit, (serverAction) => {
            const action = normalizeGameStateAction(serverAction);
            this.gameState = gameStateMutator(this.gameState, action);

            if (this.onActionCallback) {
                this.onActionCallback(action, this.gameState);
            }
        });
    }

    cleanUp(): void {
    }
}
