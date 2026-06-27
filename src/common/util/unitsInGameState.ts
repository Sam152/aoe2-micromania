import { GameState } from "../../types.ts";
import { ComputedTickState } from "../state/computed/createComputedTickState.ts";

export function unitsInGameState(state: GameState, selectedUnits: Array<number>) {
  return state.units.filter((unit) => selectedUnits.includes(unit.id));
}

export function unitsInGameStateComputed(computed: ComputedTickState, selectedUnits: Array<number>) {
  return selectedUnits.map((selectedUnit) => computed.unitsById()[selectedUnit]).filter((u) => !!u);
}
