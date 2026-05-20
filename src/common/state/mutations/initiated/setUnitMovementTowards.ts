import { compassDirectionCalculator } from "../../../units/compassDirectionCalculator.ts";
import { UnitState } from "../../../units/UnitState.ts";
import { GameState, UnitInstance } from "../../../../types.d.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { ticksToDestination } from "../../../util/ticksToDestination.ts";
import { snapToClamp } from "../../../util/snapToClamp.ts";

export function setUnitMovementTowards(state: GameState, unit: UnitInstance, destination: Vector2): Vector2 {
  const snappedDestination = snapToClamp(destination, state.mapSize);

  unit.movingDirection = snappedDestination.clone().sub(unit.position).normalize();
  const ticks = ticksToDestination(unit, snappedDestination);

  unit.direction = compassDirectionCalculator.getDirection(unit.position, destination);
  unit.unitState = UnitState.Moving;
  unit.arrivalTick = state.ticks + ticks;

  return snappedDestination;
}

export function setUnitMovementAwayFrom(state: GameState, unit: UnitInstance, thingToAvoid: Vector2) {
  const direction = unit.position.clone().add(unit.position.clone().sub(thingToAvoid));
  setUnitMovementTowards(state, unit, direction);
}

export function setUnitMovementTowardsCurrentWaypoint(state: GameState, unit: UnitInstance): void {
  setUnitMovementTowards(state, unit, unit.waypoints[0]);
}
