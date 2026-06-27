import { defaultState as defaultGameState, gameStateMutator } from "../gameState.ts";
import { clientStateMutator, defaultState as defaultClientState } from "../clientState.ts";
import { ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface } from "../../../types.ts";
import { Socket } from "socket.io-client";
import { normalizeGameStateAction, normalizeGameStateObject } from "../../util/normalizer.ts";
import { TransportEvent } from "../transport/TransportEvent.ts";
import { createComputedTickState } from "../computed/createComputedTickState.ts";
import { GameStateListener, PreTickListener } from "./GameStateListener.ts";

/**
 * A state manager with a client => server relationship.
 */
export class NetworkedStateManager implements StateManagerInterface {
  private gameState: GameState;
  private clientState: ClientState;
  private socket: Socket;
  private gameStateListeners: Array<GameStateListener>;
  private preTickListeners: Array<PreTickListener>;
  private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;

  constructor(socket: Socket) {
    this.gameState = defaultGameState();
    this.clientState = defaultClientState(socket.id!);
    this.socket = socket;
    this.gameStateListeners = [];
    this.preTickListeners = [];
    this.clientStateListeners = [];
  }

  addGameStateListener(listener: GameStateListener): void {
    this.gameStateListeners.push(listener);
  }

  addPreTickListener(listener: PreTickListener): void {
    this.preTickListeners.push(listener);
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

    let hasWholeState = false;
    this.socket.on(TransportEvent.GameStateActionTransmit, (serverAction) => {
      if (!hasWholeState) {
        return;
      }

      const action = normalizeGameStateAction(serverAction);
      const computed = createComputedTickState(this.gameState);

      this.preTickListeners.forEach((listener) => listener(this.gameState, action, computed));
      this.gameState = gameStateMutator(this.gameState, action, computed);

      if (action.n === "T" && action.t !== this.gameState.ticks - 1) {
        console.error("Desync detected - reloading");
        globalThis.location.reload();
      }

      this.dispatchClient({
        n: "GAME_STATE_REHYDRATED",
      });
      this.gameStateListeners.forEach((listener) => listener(this.gameState, action));
    });

    this.socket.on(TransportEvent.WholeGameStateTransmit, (serverState) => {
      this.gameState = normalizeGameStateObject(serverState);
      hasWholeState = true;
    });
  }

  cleanUp(): void {
    this.socket.off(TransportEvent.GameStateActionTransmit);
    this.socket.off(TransportEvent.WholeGameStateTransmit);
  }
}
