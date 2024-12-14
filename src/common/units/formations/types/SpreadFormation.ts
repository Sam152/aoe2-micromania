import { Vector2 } from "three/src/math/Vector2";
import FormationBase from "../FormationBase";
import { UnitInstance } from "../../../../types";
import { formGroupedLines } from "../utilities/formGroupedLines";

export default class SpreadFormation extends FormationBase {
  distanceBetween = 40;

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return formGroupedLines(units, destination, this.distanceBetween);
  }
}
