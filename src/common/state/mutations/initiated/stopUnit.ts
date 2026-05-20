import { UnitState } from "../../../units/UnitState.ts";
import { UnitInstance } from "../../../../types.d.ts";

export function stopUnit(unit: UnitInstance): void {
  unit.unitState = UnitState.Idle;
  unit.movingDirection = undefined;
  unit.waypoints = [];
  unit.clickedWaypoints = [];
  unit.targetingPosition = undefined;
  unit.targetingUnit = undefined;
  unit.convertingUnit = undefined;
  unit.conversionSucceedsAt = undefined;
  unit.patrollingTo = undefined;
  unit.patrollingToReturn = undefined;
  unit.reformingTo = undefined;
  unit.reformingSpeedFactor = undefined;
  unit.reformingArrivalTick = undefined;
}

export function stopUnitExceptForWaypoints(unit: UnitInstance): void {
  unit.unitState = UnitState.Idle;
  unit.movingDirection = undefined;
  unit.targetingPosition = undefined;
  unit.targetingUnit = undefined;
  unit.patrollingTo = undefined;
  unit.patrollingToReturn = undefined;
  unit.reformingTo = undefined;
  unit.reformingSpeedFactor = undefined;
  unit.reformingArrivalTick = undefined;
}
