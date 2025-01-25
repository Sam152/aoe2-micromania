import { GameState } from "../../../../types";
import Unit from "../../../units/Unit";
import stopUnit from "./stopUnit";
import { ComputedFrameState } from "../../computed/createComputedFrameState";

export function startConversion(state: GameState, computed: ComputedFrameState, monkId: number, target: number) {
  const monkUnit = computed.unitIndex[monkId];
  if (!monkUnit || monkUnit.unitType !== Unit.Monk) {
    return;
  }
  stopUnit(monkUnit);
  monkUnit.convertingUnit = target;
}
