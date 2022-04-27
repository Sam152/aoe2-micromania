import compassDirectionCalculator from '../../units/compassDirectionCalculator';
import UnitState from '../../units/UnitState';
import {UnitInstance} from '../../../types';
import formationManager from '../../units/formations/FormationManager';
import FormationType from '../../units/formations/FormationType';
import {Vector2} from 'three';


export function moveUnitsTowardsCurrentWaypoint(formation: FormationType, destination: Vector2, units: UnitInstance[]) {
    const positions = units.map((unit) => unit.position);
    formationManager.get(formation).form(positions, destination).map((formationPosition, index) => {
        units[index].waypoints = [formationPosition];
        setUnitMovementTowardsCurrentWaypoint(units[index]);
    });
}

export default function setUnitMovementTowardsCurrentWaypoint(unit: UnitInstance): void {
    setUnitMovementTowards(unit, unit.waypoints[0]);
}

export function setUnitMovementTowards(unit: UnitInstance, destination: Vector2) {
    unit.movingDirection = destination.clone().sub(unit.position).normalize();
    unit.direction = compassDirectionCalculator.getDirection(unit.position, destination);
    unit.unitState = UnitState.Moving;
}
