import { defaultState as defaultGameState, gameStateMutator } from "../gameState.ts";
import { clientStateMutator, defaultState as defaultClientState } from "../clientState.ts";
import { ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface } from "../../../types.ts";

import { createComputedTickState } from "../computed/createComputedTickState.ts";
import { GameStateListener, PreTickListener } from "./GameStateListener.ts";

import { FrameBudgetCalculator, frameBudgetCalculator } from "../../util/frameBudgetCalculator.ts";
import { config } from "../../config.ts";

/**
 * A state manager that holds context locally, may either be a client or a server.
 */
export class LocalStateManager implements StateManagerInterface {
  private gameState: GameState;
  private clientState: ClientState;
  private gameStateListeners: Array<GameStateListener>;
  private preGameStateListeners: Array<PreTickListener>;
  private ticker!: ReturnType<typeof setInterval>;
  private clientStateListeners: Array<(state: ClientState, action: ClientStateAction) => void>;
  private budgetCalculator: FrameBudgetCalculator;
  private secondDuration: number;
  private tickFn: () => void;

  constructor(clientId: string | undefined, tickFn?: () => void, secondDuration = 1000) {
    this.gameState = defaultGameState();
    this.clientState = defaultClientState(clientId!);
    this.gameStateListeners = [];
    this.preGameStateListeners = [];
    this.clientStateListeners = [];
    this.budgetCalculator = frameBudgetCalculator();
    this.secondDuration = secondDuration;
    this.tickFn = tickFn || (() => this.dispatchGame({ n: "T", t: this.gameState.ticks }));
  }

  addGameStateListener(listener: GameStateListener): void {
    this.gameStateListeners.push(listener);
  }

  addPreTickListener(listener: PreTickListener): void {
    this.preGameStateListeners.push(listener);
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
    this.budgetCalculator.start();
    const computed = createComputedTickState(this.gameState);
    this.preGameStateListeners.forEach((listener) => listener(this.gameState, action, computed));
    this.gameState = gameStateMutator(this.gameState, action, computed);
    this.gameStateListeners.forEach((listener) => listener(this.gameState, action));
    this.budgetCalculator.end();
  }

  getClientState(): ClientState {
    return this.clientState;
  }

  getGameState(): GameState {
    return this.gameState;
  }

  init(): void {
    this.ticker = setInterval(this.tickFn, this.secondDuration / config.ticksPerSecond);
  }

  cleanUp(): void {
    clearInterval(this.ticker);
  }
}
