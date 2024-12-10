import { Vector2 } from "three/src/math/Vector2";
import averageVector from "../../../util/averageVector";
import formLines, { translateAndRotate } from "../utilities/formLines";
import FormationBase from "../FormationBase";
import { UnitInstance } from "../../../../types";
import { groupByTypes } from "../utilities/groupByTypes";
import { formationDepth } from "../utilities/formationDepths";

export default class LineFormation extends FormationBase {
  distanceBetween = 25;
  unitsPerRow = 6;

  doForm(units: UnitInstance[], destination: Vector2): Array<Vector2> {
    const positions = units.map((unit) => unit.position);
    let startingPoint = averageVector(positions);

    const destinationWithOffset = destination.clone();

    const unitVectorDirectionMoving = destination.clone().sub(startingPoint).normalize();
    const cumulativeDepth = new Vector2();

    const idsToPositions: Record<number, Vector2> = {};

    groupByTypes(units).forEach(([unitType, units]) => {
      const unitsWithId = Object.entries(units);

      const groupUnits = unitsWithId.map((unitsWithId) => unitsWithId[1]) as UnitInstance[];
      const groupUnitsPositions = groupUnits.map((unit) => unit.position);

      if (groupUnits.length === 1) {
        cumulativeDepth.add(unitVectorDirectionMoving.clone().multiplyScalar(formationDepth()));
        idsToPositions[groupUnits[0].id] = groupUnits[0].position.add(cumulativeDepth);
        return;
      }

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

      cumulativeDepth.add(unitVectorDirectionMoving.clone().multiplyScalar(formationDepth(newPositions)));

      const rotated = translateAndRotate(groupUnitsPositions, newPositions, destination, startingPoint).map((rotated) =>
        rotated.add(cumulativeDepth),
      );

      rotated.forEach((position, i) => {
        idsToPositions[unitsWithId[i][1].id] = position;
      });
    });

    return units.map((unit) => idsToPositions[unit.id]);
  }
}
