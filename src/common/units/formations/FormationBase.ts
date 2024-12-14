import { FormationInterface, UnitInstance } from "../../../types";
import { Vector2 } from "three/src/math/Vector2";

export default abstract class FormationBase implements FormationInterface {
  form(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    if (units.length === 0) {
      return [];
    }
    if (units.length === 1) {
      return [destination.clone()];
    }
    return this.doForm(units, destination);
  }

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    return [];
  }
}
