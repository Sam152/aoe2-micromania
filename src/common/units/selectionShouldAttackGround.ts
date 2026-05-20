import { GameState } from "../../types.d.ts";
import { Unit } from "./Unit.ts";
import { unitsById } from "./unitsById.ts";

export function selectionShouldAttackGround(unitIds: number[], state: GameState): boolean {
  const byId = unitsById(state);
  for (const unitId of unitIds) {
    const unit = byId[unitId];
    // Allow both archers and mangos to attack ground.
    if (unit && unit.unitType !== Unit.Monk) {
      return true;
    }
  }
  return false;
}
