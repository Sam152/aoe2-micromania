import { calculateUnitMovementPerTick } from "../units/calculateUnitMovementPerTick.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { UnitInstance } from "../../types.ts";
import { worldDistance, worldLength } from "./worldDistance.ts";

export function ticksToDestination(unit: UnitInstance, destination: Vector2) {
  const distance = worldDistance(unit.position, destination);
  return distance === 0 ? 0 : Math.ceil(distance / worldLength(calculateUnitMovementPerTick(unit)!));
}
