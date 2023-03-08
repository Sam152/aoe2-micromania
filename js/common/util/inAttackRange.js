import config from '../config';
import unitMetadataFactory from '../units/unitMetadataFactory';
export default function inAttackRange(unit, position) {
    return unit.position.distanceTo(position) < getAttackRange(unit);
}
export function getAttackRange(unit) {
    var unitData = unitMetadataFactory.getUnit(unit.unitType);
    return unitData.attackRange * config.tileGameStatsLength;
}
export function inMinimumRange(unit, position) {
    var unitData = unitMetadataFactory.getUnit(unit.unitType);
    return unit.position.distanceTo(position) < unitData.attackMinRange * config.tileGameStatsLength;
}
//# sourceMappingURL=inAttackRange.js.map