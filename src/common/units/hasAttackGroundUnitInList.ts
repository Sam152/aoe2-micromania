import { GameState, UnitInstance } from "../../types";
import Unit from "./Unit";

export function hasAttackGroundUnitInList(unitIds: number[], state: GameState): boolean {
  const unitsById = state.units.reduce((byId: Record<number, UnitInstance>, unit) => {
    byId[unit.id] = unit;
    return byId;
  }, {});
  for (const unitId of unitIds) {
    const unit = unitsById[unitId];
    if (unit && unit.unitType !== Unit.Monk) {
      return true;
    }
  }
  return false;
}
