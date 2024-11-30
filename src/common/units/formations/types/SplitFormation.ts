import { Vector2 } from "three/src/math/Vector2";
import averageVector from "../../../util/averageVector";
import formLines, { translateAndRotate } from "../utilities/formLines";
import FormationBase from "../FormationBase";

export default class SplitFormation extends FormationBase {
  distanceBetween = 20;
  unitsPerRow = 3;

  doForm(positions: Array<Vector2>, destination: Vector2): Array<Vector2> {
    const startingPoint = averageVector(positions);

    const rows = Math.ceil(positions.length / this.unitsPerRow);
    const columns = Math.ceil(positions.length / rows);

    const middleIndex = Math.ceil(positions.length / 2);
    const leftSplitUnits = positions.slice(0, middleIndex);
    const rightSplitUnits = positions.slice(-middleIndex);

    const leftSplitDestination = destination;
    const rightSplitDestination = destination.clone().add(new Vector2(200, 0));

    const newPositions = [
      ...formLines(leftSplitUnits, leftSplitDestination, rows, columns, startingPoint, this.distanceBetween),
      ...formLines(rightSplitUnits, rightSplitDestination, rows, columns, startingPoint, this.distanceBetween),
    ];

    return translateAndRotate(positions, newPositions, destination, startingPoint);
  }
}
