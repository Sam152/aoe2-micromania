import { UnitInstance } from "../../../../types";
import Unit from "../../Unit";

export function groupByTypes(units: UnitInstance[]) {
  return units.reduce<UnitMap>((unitMap, unit) => {
    unitMap[unit.unitType] = unitMap[unit.unitType] || {};
    unitMap[unit.unitType][unit.id] = unit;
    return unitMap;
  }, {});
}

export type UnitMap = Partial<Record<Unit, Record<number, UnitInstance>>>;
