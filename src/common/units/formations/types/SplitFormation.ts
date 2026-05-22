import { Vector2 } from "three/src/math/Vector2.js";
import { averageVector } from "../../../util/averageVector.ts";
import { formLines, translateAndRotate } from "../utilities/formLines.ts";
import { FormationBase } from "../FormationBase.ts";
import { UnitInstance } from "../../../../types.ts";

export class SplitFormation extends FormationBase {
  distanceBetween = 20;
  unitsPerRow = 3;

  override doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    const positions = units.map((unit) => unit.position);

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
