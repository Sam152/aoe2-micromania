import { UnitTypeActivations } from "../../integration/createBot.ts";
import { UnitType } from "../../../units/UnitType.ts";

/**
 * In-place merge into mergeInto.
 */
export function mergeActivations(mergeInto: UnitTypeActivations, activationsToMerge: UnitTypeActivations) {
  activationsToMerge[UnitType.Monk].forEach((val) => mergeInto[UnitType.Monk].add(val));
  activationsToMerge[UnitType.Archer].forEach((val) => mergeInto[UnitType.Archer].add(val));
  activationsToMerge[UnitType.Mangonel].forEach((val) => mergeInto[UnitType.Mangonel].add(val));
  return mergeInto;
}
