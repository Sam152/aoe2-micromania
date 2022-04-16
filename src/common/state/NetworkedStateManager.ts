import {defaultState as defaultGameState, gameStateMutator} from './gameState';
import {clientStateMutator, defaultState as defaultClientState} from './clientState';
import {
    ClientState,
    ClientStateAction,
    GameState,
    GameStateAction,
    StateManagerInterface,
    UnitInstance
} from '../../types';
import {Socket} from 'socket.io-client';
import {Vector2} from "three";

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
        this.clientState = clientStateMutator(this.clientState, action);
    }

    dispatchGame(action: GameStateAction) {
        // @todo, a local tick could also be invoked for interpolation, when network latency is high?
        this.socket.emit('stateDispatch', action);
    }

    getClientState(): ClientState {
        return this.clientState;
    }

    getGameState(): GameState {
        return this.gameState;
    }

    init(): void {
        this.socket.on('gameStateUpdated', (serverState) => {
            // In the absence of a more sophisticated normalizer, points need to be converted back
            // into three.js vectors when state is transmitted from the server.
            serverState.units = serverState.units.map((unit: UnitInstance) => ({
                ...unit,
                position: new Vector2(unit.position.x, unit.position.y),
                movingDirection: unit.movingDirection ? new Vector2(unit.movingDirection.x, unit.movingDirection.y) : unit.movingDirection,
                movingTo: unit.movingTo ? new Vector2(unit.movingTo.x, unit.movingTo.y) : unit.movingTo,
            }));
            this.gameState = serverState;
        });
    }
}
