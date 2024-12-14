import averageVector from "../../../util/averageVector";
import { Vector2 } from "three/src/math/Vector2";
import { groupByTypes } from "./groupByTypes";
import { UnitInstance } from "../../../../types";
import { formationDepth } from "./formationDepths";
import formLines, { translateAndRotate } from "./formLines";

const UNITS_PER_ROW = 6;

export function formGroupedLines(units: UnitInstance[], destination: Vector2, distanceBetween: number) {
  const positions = units.map((unit) => unit.position);
  let startingPoint = averageVector(positions);

  const unitVectorDirectionMoving = destination.clone().sub(startingPoint).normalize();
  const cumulativeDepth = new Vector2();

  const idsToPositions: Record<number, Vector2> = {};

  const grouped = groupByTypes(units);

  if (grouped.length === 1) {
    const rows = Math.ceil(positions.length / UNITS_PER_ROW);
    const columns = Math.ceil(positions.length / rows);
    const newPositions = formLines(positions, destination, rows, columns, startingPoint, distanceBetween);
    return translateAndRotate(positions, newPositions, destination, startingPoint);
  }

  grouped.forEach(([unitType, units]) => {
    const unitsWithId = Object.entries(units);

    const groupUnits = unitsWithId.map((unitsWithId) => unitsWithId[1]) as UnitInstance[];
    const groupUnitsPositions = groupUnits.map((unit) => unit.position);

    if (groupUnits.length === 1) {
      idsToPositions[groupUnits[0].id] = destination.clone().add(cumulativeDepth.clone().multiplyScalar(1.5));
      cumulativeDepth.add(unitVectorDirectionMoving.clone().multiplyScalar(formationDepth()));
      return;
    }

    const rows = Math.ceil(positions.length / UNITS_PER_ROW);
    const columns = Math.ceil(positions.length / rows);

    const newPositions = formLines(
      groupUnitsPositions,
      destination.clone(),
      rows,
      columns,
      startingPoint,
      distanceBetween,
    );

    const rotated = translateAndRotate(groupUnitsPositions, newPositions, destination.clone(), startingPoint).map(
      (rotated) =>
        rotated
          // Don't ask me to explain this.
          .add(cumulativeDepth)
          .add(unitVectorDirectionMoving.clone().multiplyScalar(formationDepth(newPositions)).divideScalar(2)),
    );
    cumulativeDepth.add(unitVectorDirectionMoving.clone().multiplyScalar(formationDepth(newPositions)));

    rotated.forEach((position, i) => {
      idsToPositions[unitsWithId[i][1].id] = position;
    });
  });

  return units.map((unit) =>
    idsToPositions[unit.id].sub(unitVectorDirectionMoving.clone().multiplyScalar(cumulativeDepth.length() / 2)),
  );
}
