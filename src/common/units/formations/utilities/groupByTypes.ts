import { UnitInstance } from "../../../../types";
import Unit from "../../Unit";

export function groupByTypes(units: UnitInstance[]): UnitMap {
  const gathered = units.reduce<GatheredUnits>((unitMap, unit) => {
    unitMap[unit.unitType] = unitMap[unit.unitType] || {};
    unitMap[unit.unitType][unit.id] = unit;
    return unitMap;
  }, {});

  const entries = Object.entries(gathered) as any as UnitMap;
  return entries.sort((typeA, typeB) => typeA[0] - typeB[0]);
}

type GatheredUnits = Partial<Record<Unit, Record<number, UnitInstance>>>;
export type UnitMap = [Unit, Record<number, UnitInstance>][];
