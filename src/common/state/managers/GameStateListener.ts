import { GameState, GameStateAction } from "../../../types.ts";
import { ComputedTickState } from "../computed/createComputedTickState.ts";

export type GameStateListener = (state: GameState, action: GameStateAction, computed: ComputedTickState) => void;
