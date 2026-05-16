import unitMetadataFactory from "./unitMetadataFactory.ts";
import config from "../config.ts";
import { UnitInstance } from "../../types.d.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export default function calculateUnitMovementPerTick(unit: UnitInstance): Vector2 | null {
  if (unit.movingDirection) {
    return unit.movingDirection
      .clone()
      .multiplyScalar(
        (unit.groupMovementSpeed ?? unitMetadataFactory.getUnit(unit.unitType).movementRate) *
          config.unitSpeedFactor *
          (unit.reformingSpeedFactor || 1),
      );
  }
  return null;
}
