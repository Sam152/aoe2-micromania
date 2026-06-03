import { GameState, GameStateAction } from "../../../types.ts";

export type GameStateListener = (state: GameState, action: GameStateAction) => void;
