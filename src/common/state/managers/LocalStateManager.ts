import { defaultState as defaultGameState, gameStateMutator } from "../gameState.ts";
import { clientStateMutator, defaultState as defaultClientState } from "../clientState.ts";
import { ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface } from "../../../types.ts";
import { config } from "../../config.ts";
import { ComputedFrameState, createComputedFrameState } from "../computed/createComputedFrameState.ts";
import { GameStateListener } from "./GameStateListener.ts";

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
export class LocalStateManager implements StateManagerInterface {
  private gameState: GameState;
  private clientState: ClientState;
  private computedFrameState: ComputedFrameState | undefined;
  private gameStateListeners: Array<GameStateListener>;
  private ticker!: ReturnType<typeof setInterval>;
  private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;
  private tickFn: () => void;

  constructor(clientId: string | undefined, tickFn?: () => void) {
    this.gameState = defaultGameState();
    this.clientState = defaultClientState(clientId!);
    this.gameStateListeners = [];
    this.clientStateListeners = [];
    this.tickFn = tickFn || (() => this.dispatchGame({ n: "T", t: this.gameState.ticks }));
  }

  addGameStateListener(listener: GameStateListener): void {
    this.gameStateListeners.push(listener);
  }

  addClientStateListener(listener: (state: ClientState, action: ClientStateAction) => void): void {
    this.clientStateListeners.push(listener);
  }

  dispatchClient(action: ClientStateAction): void {
    this.clientState = clientStateMutator(this.clientState, this.gameState, action);
    this.clientStateListeners.forEach((clientStateListener) => {
      clientStateListener(this.clientState, action);
    });
  }

  dispatchGame(action: GameStateAction): void {
    if (!this.computedFrameState) {
      this.computedFrameState = createComputedFrameState(this.gameState);
    }

    // Create the computed frame state, after the given tick is done,
    // because listeners may want to use it, but also feed it back into
    // the next mutator.
    this.gameState = gameStateMutator(this.gameState, action, this.computedFrameState);
    this.computedFrameState = createComputedFrameState(this.gameState);

    this.gameStateListeners.forEach((gameStateListener) => {
      gameStateListener(this.gameState, action, this.computedFrameState!);
    });
  }

  getClientState(): ClientState {
    return this.clientState;
  }

  getGameState(): GameState {
    return this.gameState;
  }

  init(): void {
    this.ticker = setInterval(this.tickFn, 1000 / config.ticksPerSecond);
  }

  cleanUp(): void {
    clearInterval(this.ticker);
  }
}
