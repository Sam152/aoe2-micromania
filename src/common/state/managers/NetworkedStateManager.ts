import {defaultState as defaultGameState, gameStateMutator} from "../gameState";
import {clientStateMutator, defaultState as defaultClientState} from "../clientState";
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from "../../../types";
import {Socket} from "socket.io-client";
import {normalizeGameStateAction, normalizeGameStateObject} from "../../util/normalizer";
import TransportEvent from "../transport/TransportEvent";

/**
 * A state manager with a client => server relationship.
 */
export default class NetworkedStateManager implements StateManagerInterface {
  private gameState: GameState;
  private clientState: ClientState;
  private socket: Socket;
  private gameStateListeners: Array<(state: GameState, action: GameStateAction) => void>;
  private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;

  constructor(socket: Socket) {
    this.gameState = defaultGameState();
    this.clientState = defaultClientState(socket.id);
    this.socket = socket;
    this.gameStateListeners = [];
    this.clientStateListeners = [];
  }

  addGameStateListener(listener: (state: GameState, action: GameStateAction) => void): void {
    this.gameStateListeners.push(listener);
  }

  addClientStateListener(listener: (state: ClientState, action: ClientStateAction) => void): void {
    this.clientStateListeners.push(listener);
  }

  dispatchClient(action: ClientStateAction) {
    this.clientState = clientStateMutator(this.clientState, this.gameState, action);
    this.clientStateListeners.forEach((clientStateListener) => {
      clientStateListener(this.clientState, action);
    });
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
      this.dispatchClient({
        n: "GAME_STATE_REHYDRATED",
      });
      this.gameStateListeners.forEach((gameStateListener) => {
        gameStateListener(this.gameState, action);
      });
    });
  }

  cleanUp(): void {
    this.socket.off(TransportEvent.GameStateActionTransmit);
    this.socket.off(TransportEvent.WholeGameStateTransmit);
  }
}
