import { Vector2 } from "three/src/math/Vector2";
import averageVector from "../../../util/averageVector";
import formLines, { translateAndRotate } from "../utilities/formLines";
import FormationBase from "../FormationBase";
import { UnitInstance } from "../../../../types";
import { groupByTypes } from "../utilities/groupByTypes";

export default class LineFormation extends FormationBase {
  distanceBetween = 25;
  unitsPerRow = 6;

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    const positions = units.map((unit) => unit.position);
    const startingPoint = averageVector(positions);

    const idsToPositions: Record<number, Vector2> = {};

    const byType = groupByTypes(units);
    Object.entries(byType).forEach(([unitType, units]) => {
      const unitsWithId = Object.entries(units);

      const groupUnits = unitsWithId.map((unitsWithId) => unitsWithId[1]) as UnitInstance[];
      const groupUnitsPositions = groupUnits.map((unit) => unit.position);

      const rows = Math.ceil(positions.length / this.unitsPerRow);
      const columns = Math.ceil(positions.length / rows);

      const newPositions = formLines(
        groupUnitsPositions,
        destination,
        rows,
        columns,
        startingPoint,
        this.distanceBetween,
      );

      newPositions.forEach((position, i) => {
        idsToPositions[unitsWithId[i][1].id] = position;
      });

      // Object.entries(units).forEach(([unitId, unit]) => {
      // });
    });

    const rows = Math.ceil(positions.length / this.unitsPerRow);
    const columns = Math.ceil(positions.length / rows);

    const newPositions = formLines(positions, destination, rows, columns, startingPoint, this.distanceBetween);
    return translateAndRotate(positions, newPositions, destination, startingPoint);
  }
}
