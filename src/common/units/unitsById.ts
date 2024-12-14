import { GameState, UnitInstance } from "../../types";

export function unitsById(state: GameState) {
  return state.units.reduce((byId: Record<number, UnitInstance>, unit) => {
    byId[unit.id] = unit;
    return byId;
  }, {});
}
