import unitMetadataFactory from "./unitMetadataFactory";
import config from "../config";
import { UnitInstance } from "../../types";
import { Vector2 } from "three/src/math/Vector2";

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
