import unitMetadataFactory from './unitMetadataFactory';
import config from '../config';
export default function calculateUnitMovementPerTick(unit) {
    if (unit.movingDirection) {
        return unit.movingDirection
            .clone()
            .multiplyScalar(unitMetadataFactory.getUnit(unit.unitType).movementRate * config.unitSpeedFactor * (unit.reformingSpeedFactor || 1));
    }
    return null;
}
//# sourceMappingURL=calculateUnitMovementPerTick.js.map