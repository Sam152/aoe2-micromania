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
    let startingPoint = averageVector(positions);

    const destinationWithOffset = destination.clone();

    const unitVectorDirectionMoving = destination.clone().sub(startingPoint).normalize();

    const idsToPositions: Record<number, Vector2> = {};

    groupByTypes(units).forEach(([unitType, units]) => {
      console.log(units);
      const unitsWithId = Object.entries(units);

      const groupUnits = unitsWithId.map((unitsWithId) => unitsWithId[1]) as UnitInstance[];
      const groupUnitsPositions = groupUnits.map((unit) => unit.position);

      if (groupUnits.length === 1) {
        idsToPositions[groupUnits[0].id] = destinationWithOffset.clone();
        destinationWithOffset.add(unitVectorDirectionMoving.clone().multiplyScalar(100));
        return;
      }

      const rows = Math.ceil(positions.length / this.unitsPerRow);
      const columns = Math.ceil(positions.length / rows);

      const newPositions = formLines(
        groupUnitsPositions,
        destinationWithOffset.clone(),
        rows,
        columns,
        startingPoint,
        this.distanceBetween,
      );
      const rotated = translateAndRotate(
        groupUnitsPositions,
        newPositions,
        destinationWithOffset.clone(),
        startingPoint,
      );

      destinationWithOffset.add(unitVectorDirectionMoving.clone().multiplyScalar(100));

      rotated.forEach((position, i) => {
        idsToPositions[unitsWithId[i][1].id] = position;
      });

      // Object.entries(units).forEach(([unitId, unit]) => {
      // });
    });

    const realigned = units.map((unit) => idsToPositions[unit.id]);

    // console.log(idsToPositions);
    //
    // const rows = Math.ceil(positions.length / this.unitsPerRow);
    // const columns = Math.ceil(positions.length / rows);
    //
    // const newPositions = formLines(positions, destination, rows, columns, startingPoint, this.distanceBetween);
    return realigned;
  }
}
