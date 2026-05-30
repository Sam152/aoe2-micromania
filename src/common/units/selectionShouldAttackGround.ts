import { GameState } from "../../types.ts";
import { UnitType } from "./UnitType.ts";
import { unitsById } from "./unitsById.ts";

export function selectionShouldAttackGround(unitIds: number[], state: GameState): boolean {
  const byId = unitsById(state);
  for (const unitId of unitIds) {
    const unit = byId[unitId];
    // Allow both archers and mangos to attack ground.
    if (unit && unit.unitType !== UnitType.Monk) {
      return true;
    }
  }
  return false;
}
