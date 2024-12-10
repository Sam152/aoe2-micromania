import { FormationInterface, UnitInstance } from "../../../types";
import { Vector2 } from "three/src/math/Vector2";

export default abstract class FormationBase implements FormationInterface {
  form(positions: UnitInstance[], destination: Vector2): Array<Vector2> {
    if (positions.length === 0) {
      return [];
    }
    if (positions.length === 1) {
      return [destination.clone()];
    }
    return this.doForm(positions, destination);
  }

  doForm(positions: UnitInstance[], destination: Vector2): Array<Vector2> {
    return [];
  }
}
