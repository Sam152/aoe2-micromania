import { UnitInstance } from "../../types.ts";
import { hasValue } from "./hasValue.ts";
import { averageVector } from "./averageVector.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export function populationVector(units: UnitInstance[], property: keyof UnitInstance): Vector2 {
  return averageVector(units.map((unit) => unit[property]).filter((vector) => hasValue(vector)) as Vector2[]);
}
