import stopUnit from "./stopUnit.ts";
import formationManager from "../../../units/formations/FormationManager.ts";
import setUnitMovementTowards, { setUnitMovementTowardsCurrentWaypoint } from "./setUnitMovementTowards.ts";
import { GameState, UnitInstance } from "../../../../types.d.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import averageVector from "../../../util/averageVector.ts";
import populationVector from "../../../util/populationVector.ts";
import config from "../../../config.ts";
import addUnitReformingSpeedFactor from "../../../util/addUnitReformingSpeedFactor.ts";
import { snapToClamp } from "../../../util/snapToClamp.ts";

export default function moveTo(state: GameState, units: UnitInstance[], destination: Vector2) {
  units.forEach((unit) => {
    stopUnit(unit);
    unit.lastCommandedDirection = destination;
  });

  formationManager
    .fromPopulation(units)
    .form(units, destination)
    .forEach((formationPosition, index) => {
      units[index].waypoints = [snapToClamp(formationPosition, state.mapSize)];
      setUnitMovementTowardsCurrentWaypoint(state, units[index]);
    });

  const positions = units.map((unit) => unit.position);
  const position = averageVector(positions);
  // While moving, if the units are travelling a reasonable distance, reform them in their current location before
  // continuing to their destination.
  if (units.length > 2 && position.distanceTo(destination) > config.movingReformDistance * 1.5) {
    const reformAt = position.add(
      populationVector(units, "movingDirection").multiplyScalar(config.movingReformDistance),
    );
    formationManager
      .fromPopulation(units)
      .form(units, reformAt)
      .forEach((formationPosition, index) => {
        units[index].reformingTo = setUnitMovementTowards(state, units[index], formationPosition);
        units[index].reformingArrivalTick = units[index].arrivalTick;
      });
    addUnitReformingSpeedFactor(state.ticks, units);
  }
}
