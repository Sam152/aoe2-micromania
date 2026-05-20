import { UnitInstance } from "../../types.d.ts";
import { hasValue } from "./hasValue.ts";

export function populationHas(units: UnitInstance[], property: keyof UnitInstance) {
  const totalUnitsThatHaveProperty = units
    .map((unit) => hasValue(unit[property]))
    .filter((hasProperty) => hasProperty).length;
  return totalUnitsThatHaveProperty > units.length / 2;
}
