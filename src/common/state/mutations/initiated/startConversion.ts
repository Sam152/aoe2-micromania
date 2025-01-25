import { GameState } from "../../../../types";
import Unit from "../../../units/Unit";
import stopUnit from "./stopUnit";
import { ComputedFrameState } from "../../computed/createComputedFrameState";

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
