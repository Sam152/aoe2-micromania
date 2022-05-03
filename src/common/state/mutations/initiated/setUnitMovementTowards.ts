import compassDirectionCalculator from '../../../units/compassDirectionCalculator';
import UnitState from '../../../units/UnitState';
import {GameState, UnitInstance} from '../../../../types';
import {Vector2} from 'three/src/math/Vector2';
import ticksToDestination from '../../../util/ticksToDestination';

export default function setUnitMovementTowards(state: GameState, unit: UnitInstance, destination: Vector2) {
    unit.movingDirection = destination.clone().sub(unit.position).normalize();
    const ticks = ticksToDestination(unit, destination);

    unit.direction = compassDirectionCalculator.getDirection(unit.position, destination);
    unit.unitState = UnitState.Moving;
    unit.arrivalTick = state.ticks + ticks;
}

export function setUnitMovementAwayFrom(state: GameState, unit: UnitInstance, thingToAvoid: Vector2) {
    const direction = unit.position.clone().add(unit.position.clone().sub(thingToAvoid));
    setUnitMovementTowards(state, unit, direction);
}

export function setUnitMovementTowardsCurrentWaypoint(state: GameState, unit: UnitInstance): void {
    setUnitMovementTowards(state, unit, unit.waypoints[0]);
}
