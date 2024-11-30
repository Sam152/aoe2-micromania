import { UnitInstance } from "../../types";
import hasValue from "./hasValue";
import averageVector from "./averageVector";
import { Vector2 } from "three/src/math/Vector2";

export default function populationVector(units: UnitInstance[], property: keyof UnitInstance): Vector2 {
  return averageVector(units.map((unit) => unit[property]).filter((vector) => hasValue(vector)) as Vector2[]);
}
