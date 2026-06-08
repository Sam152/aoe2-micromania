import { UnitInstance } from "../../../../../types.ts";
import { BlackboardUnitType } from "../../dataType/catalog/unitType.ts";
import { UnitType } from "../../../../units/UnitType.ts";

const map = {
  "MANGO": UnitType.Mangonel,
  "ARCHER": UnitType.Archer,
  "MONK": UnitType.Monk,
};

export function unitIsType(unit: UnitInstance, type: BlackboardUnitType): boolean {
  return unit.unitType === map[type];
}
