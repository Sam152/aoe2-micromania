import { GameState } from "../../types";
import Unit from "./Unit";
import { unitsById } from "./unitsById";

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
