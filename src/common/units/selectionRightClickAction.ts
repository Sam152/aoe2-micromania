import { GameState } from "../../types.ts";
import { UnitType } from "./UnitType.ts";
import { unitsById } from "./unitsById.ts";

export function selectionRightClickAction(unitIds: number[], state: GameState): "ATTACK" | "CONVERT" {
  if (unitIds.length === 0) {
    throw new Error("Cannot get right click action for no units.");
  }
  const byId = unitsById(state);
  for (const unitId of unitIds) {
    const unit = byId[unitId];
    // Allow both archers and mangos to attack ground.
    if (unit && unit.unitType !== UnitType.Monk) {
      return "ATTACK";
    }
  }
  return "CONVERT";
}
