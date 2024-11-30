import { Vector2 } from "three/src/math/Vector2";
import averageVector from "../../../util/averageVector";
import formLines, { translateAndRotate } from "../utilities/formLines";
import FormationBase from "../FormationBase";

export default class SpreadFormation extends FormationBase {
  distanceBetween = 40;
  unitsPerRow = 6;

  doForm(positions: Array<Vector2>, destination: Vector2): Array<Vector2> {
    const startingPoint = averageVector(positions);
    const rows = Math.ceil(positions.length / this.unitsPerRow);
    const columns = Math.ceil(positions.length / rows);

    const newPositions = formLines(positions, destination, rows, columns, startingPoint, this.distanceBetween);
    return translateAndRotate(positions, newPositions, destination, startingPoint);
  }
}
