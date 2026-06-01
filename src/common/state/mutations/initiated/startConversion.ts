import { GameState } from "../../../../types.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { stopUnit } from "./stopUnit.ts";
import { ComputedTickState } from "../../computed/createComputedTickState.ts";

export function startConversion(state: GameState, computed: ComputedTickState, monkId: number, target: number) {
  const monk = computed.unitsById()[monkId];
  if (!monk || monk.unitType !== UnitType.Monk) {
    return;
  }
  stopUnit(monk);
  if (monk.conversionJuiceFullAt === undefined || monk.conversionJuiceFullAt <= state.ticks) {
    monk.convertingUnit = target;
  }
}
