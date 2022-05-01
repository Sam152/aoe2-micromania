import compassDirectionCalculator from '../../../units/compassDirectionCalculator';
import UnitState from '../../../units/UnitState';
import {GameState, UnitInstance} from '../../../../types';
import formationManager from '../../../units/formations/FormationManager';
import FormationType from '../../../units/formations/FormationType';
import {Vector2} from 'three';
import ticksToDestination from "../../../util/ticksToDestination";

export function moveUnitsTowardsCurrentWaypoint(state: GameState, formation: FormationType, destination: Vector2, units: UnitInstance[]) {
    const positions = units.map((unit) => unit.position);
    formationManager.get(formation).form(positions, destination).map((formationPosition, index) => {
        units[index].waypoints = [formationPosition];
        setUnitMovementTowardsCurrentWaypoint(state, units[index]);
    });
}

export function setUnitMovementTowardsCurrentWaypoint(state: GameState, unit: UnitInstance): void {
    setUnitMovementTowards(state, unit, unit.waypoints[0]);
}

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
