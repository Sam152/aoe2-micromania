import { GameState, GameStateAction } from "../../../types.ts";
import { ComputedFrameState } from "../computed/createComputedFrameState.ts";

export type GameStateListener = (state: GameState, action: GameStateAction, computed: ComputedFrameState) => void;
