import UnitState from '../../../units/UnitState';
export default function stopUnit(unit) {
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
export function stopUnitExceptForWaypoints(unit) {
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
//# sourceMappingURL=stopUnit.js.map