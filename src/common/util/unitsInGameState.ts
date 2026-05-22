import { GameState } from "../../types.ts";

export function unitsInGameState(state: GameState, selectedUnits: Array<number>) {
  return state.units.filter((unit) => selectedUnits.includes(unit.id));
}
