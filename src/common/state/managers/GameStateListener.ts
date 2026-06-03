import { GameState, GameStateAction } from "../../../types.ts";
import { ComputedTickState } from "../computed/createComputedTickState.ts";

export type PreTickListener = (state: GameState, action: GameStateAction, computed: ComputedTickState) => void;
export type GameStateListener = (state: GameState, action: GameStateAction) => void;
