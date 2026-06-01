import { defaultState as defaultGameState, gameStateMutator } from "../gameState.ts";
import { clientStateMutator, defaultState as defaultClientState } from "../clientState.ts";
import { ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface } from "../../../types.ts";
import { Socket } from "socket.io-client";
import { normalizeGameStateAction, normalizeGameStateObject } from "../../util/normalizer.ts";
import { TransportEvent } from "../transport/TransportEvent.ts";
import { ComputedTickState, createComputedTickState } from "../computed/createComputedTickState.ts";

/**
 * A state manager with a client => server relationship.
 */
export class NetworkedStateManager implements StateManagerInterface {
  private gameState: GameState;
  private clientState: ClientState;
  private socket: Socket;
  private computedFrameState: ComputedTickState | undefined;
  private gameStateListeners: Array<(state: GameState, action: GameStateAction, computed: ComputedTickState) => void>;
  private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;

  constructor(socket: Socket) {
    this.gameState = defaultGameState();
    this.clientState = defaultClientState(socket.id!);
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

    let hasWholeState = false;
    this.socket.on(TransportEvent.GameStateActionTransmit, (serverAction) => {
      if (!hasWholeState) {
        return;
      }

      const action = normalizeGameStateAction(serverAction);

      if (!this.computedFrameState) {
        this.computedFrameState = createComputedTickState(this.gameState);
      }

      this.gameState = gameStateMutator(this.gameState, action, this.computedFrameState);
      this.computedFrameState = createComputedTickState(this.gameState);

      if (action.n === "T" && action.t !== this.gameState.ticks - 1) {
        console.error("Desync detected - reloading");
        globalThis.location.reload();
      }

      this.dispatchClient({
        n: "GAME_STATE_REHYDRATED",
      });
      this.gameStateListeners.forEach((gameStateListener) => {
        gameStateListener(this.gameState, action, this.computedFrameState!);
      });
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
