import { FormationBase } from "../FormationBase.ts";
import { UnitInstance } from "../../../../types.d.ts";
import { formGroupedLines } from "../utilities/formGroupedLines.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export class LineFormation extends FormationBase {
  distanceBetween = 25;

  override doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return formGroupedLines(units, destination, this.distanceBetween);
  }
}
