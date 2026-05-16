import { GameState } from "../../../../types.d.ts";
import Unit from "../../../units/Unit.ts";
import stopUnit from "./stopUnit.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";

export function startConversion(state: GameState, computed: ComputedFrameState, monkId: number, target: number) {
  const monk = computed.unitIndex[monkId];
  if (!monk || monk.unitType !== Unit.Monk) {
    return;
  }
  stopUnit(monk);
  if (monk.conversionJuiceFullAt === undefined || monk.conversionJuiceFullAt <= state.ticks) {
    monk.convertingUnit = target;
  }
}
