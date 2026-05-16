import { GameState } from "../../types.d";

export default function unitsInGameState(state: GameState, selectedUnits: Array<number>) {
  return state.units.filter((unit) => selectedUnits.includes(unit.id));
}
