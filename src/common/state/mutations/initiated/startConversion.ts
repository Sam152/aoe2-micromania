import { GameState } from "../../../../types";
import Unit from "../../../units/Unit";
import stopUnit from "./stopUnit";

export function startConversion(state: GameState, monk: number, target: number) {
  const monkUnit = state.units.find((unit) => unit.id === monk && unit.unitType === Unit.Monk);
  if (!monkUnit) {
    return;
  }
  stopUnit(monkUnit);
  monkUnit.convertingUnit = target;
}
