import { Vector2 } from "three/src/math/Vector2.js";
import { FormationBase } from "../FormationBase.ts";
import { UnitInstance } from "../../../../types.ts";
import { formGroupedLines } from "../utilities/formGroupedLines.ts";

export class SpreadFormation extends FormationBase {
  distanceBetween = 40;

  override doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return formGroupedLines(units, destination, this.distanceBetween);
  }
}
