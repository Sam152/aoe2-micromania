import {GameState, GameStateAction} from "./types";

function GameStateReducer(state: GameState, action: GameStateAction): GameState {
  return state;
}

const defaultState: GameState = {
  units: [],
  projectiles: [],
  players: [],
};

export { defaultState, GameStateReducer };
