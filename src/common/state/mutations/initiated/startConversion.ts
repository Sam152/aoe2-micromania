import { GameState } from "../../../../types.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { stopUnit } from "./stopUnit.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";

export function startConversion(state: GameState, computed: ComputedFrameState, monkId: number, target: number) {
  const monk = computed.unitIndex()[monkId];
  if (!monk || monk.unitType !== UnitType.Monk) {
    return;
  }
  stopUnit(monk);
  if (monk.conversionJuiceFullAt === undefined || monk.conversionJuiceFullAt <= state.ticks) {
    monk.convertingUnit = target;
  }
}
