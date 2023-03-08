import compassDirectionCalculator from '../../../units/compassDirectionCalculator';
import UnitState from '../../../units/UnitState';
import ticksToDestination from '../../../util/ticksToDestination';
export default function setUnitMovementTowards(state, unit, destination) {
    unit.movingDirection = destination.clone().sub(unit.position).normalize();
    var ticks = ticksToDestination(unit, destination);
    unit.direction = compassDirectionCalculator.getDirection(unit.position, destination);
    unit.unitState = UnitState.Moving;
    unit.arrivalTick = state.ticks + ticks;
}
export function setUnitMovementAwayFrom(state, unit, thingToAvoid) {
    var direction = unit.position.clone().add(unit.position.clone().sub(thingToAvoid));
    setUnitMovementTowards(state, unit, direction);
}
export function setUnitMovementTowardsCurrentWaypoint(state, unit) {
    setUnitMovementTowards(state, unit, unit.waypoints[0]);
}
//# sourceMappingURL=setUnitMovementTowards.js.map