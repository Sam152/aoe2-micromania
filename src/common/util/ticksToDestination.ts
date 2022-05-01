import calculateUnitMovementPerTick from '../units/calculateUnitMovementPerTick';
import {Vector2} from 'three';
import {UnitInstance} from '../../types';

export default function ticksToDestination(unit: UnitInstance, destination: Vector2) {
    const distance = unit.position.distanceTo(destination);
    return distance === 0 ?
        0 :
        Math.ceil(distance / calculateUnitMovementPerTick(unit).length());
}
