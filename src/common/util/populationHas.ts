import { UnitInstance } from "../../types";
import hasValue from "./hasValue";

export default function populationHas(units: UnitInstance[], property: keyof UnitInstance) {
  const totalUnitsThatHaveProperty = units
    .map((unit) => hasValue(unit[property]))
    .filter((hasProperty) => hasProperty).length;
  return totalUnitsThatHaveProperty > units.length / 2;
}
