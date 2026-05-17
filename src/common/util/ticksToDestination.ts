import calculateUnitMovementPerTick from "../units/calculateUnitMovementPerTick.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { UnitInstance } from "../../types.d.ts";

export default function ticksToDestination(unit: UnitInstance, destination: Vector2) {
  const distance = unit.position.distanceTo(destination);
  return distance === 0 ? 0 : Math.ceil(distance / calculateUnitMovementPerTick(unit).length());
}
