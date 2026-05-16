import { GameState, UnitInstance } from "../../types.d";

export function unitsById(state: GameState) {
  return state.units.reduce((byId: Record<number, UnitInstance>, unit) => {
    byId[unit.id] = unit;
    return byId;
  }, {});
}
