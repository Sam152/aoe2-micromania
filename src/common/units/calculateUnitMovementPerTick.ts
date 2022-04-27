import unitMetadataFactory from './unitMetadataFactory';
import config from '../config';
import {UnitInstance} from '../../types';
import {Vector2} from 'three';

export default function calculateUnitMovementPerTick(unit: UnitInstance, speedFactor: number = 1): Vector2 | null {
    if (unit.movingDirection) {
        return unit.movingDirection
            .clone()
            .multiplyScalar(unitMetadataFactory.getUnit(unit.unitType).movementRate * config.unitSpeedFactor * speedFactor);
    }
    return null;
}
