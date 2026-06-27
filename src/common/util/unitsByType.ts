import { UnitInstance } from "../../types.ts";
import { UnitType } from "../units/UnitType.ts";

export function unitsByType(units: UnitInstance[]): Record<UnitType, UnitInstance[]> {
  return units.reduce<Record<UnitType, UnitInstance[]>>(
    (grouped, unit) => {
      grouped[unit.unitType].push(unit);
      return grouped;
    },
    {
      [UnitType.Archer]: [],
      [UnitType.Mangonel]: [],
      [UnitType.Monk]: [],
    },
  );
}
