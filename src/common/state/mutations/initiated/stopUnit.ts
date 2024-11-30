import UnitState from "../../../units/UnitState";
import { UnitInstance } from "../../../../types";

export default function stopUnit(unit: UnitInstance): void {
  unit.unitState = UnitState.Idle;
  unit.movingDirection = null;
  unit.waypoints = [];
  unit.clickedWaypoints = [];
  unit.targetingPosition = null;
  unit.targetingUnit = null;
  unit.patrollingTo = null;
  unit.patrollingToReturn = null;
  unit.reformingTo = null;
  unit.reformingSpeedFactor = null;
  unit.reformingArrivalTick = null;
}

export function stopUnitExceptForWaypoints(unit: UnitInstance): void {
  unit.unitState = UnitState.Idle;
  unit.movingDirection = null;
  unit.targetingPosition = null;
  unit.targetingUnit = null;
  unit.patrollingTo = null;
  unit.patrollingToReturn = null;
  unit.reformingTo = null;
  unit.reformingSpeedFactor = null;
  unit.reformingArrivalTick = null;
}
