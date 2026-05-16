import { Vector2 } from "three/src/math/Vector2.js";
import FormationBase from "../FormationBase.ts";
import { UnitInstance } from "../../../../types.d.ts";
import { formGroupedLines } from "../utilities/formGroupedLines.ts";

export default class SpreadFormation extends FormationBase {
  distanceBetween = 40;

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return formGroupedLines(units, destination, this.distanceBetween);
  }
}
