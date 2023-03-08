import UnitState from '../../../units/UnitState';
export default function registerUnitFallen(state, unit) {
    state.units = state.units.filter(function (_a) {
        var id = _a.id;
        return unit.id !== id;
    });
    state.units.filter(function (_a) {
        var targetingUnit = _a.targetingUnit;
        return targetingUnit === unit.id;
    }).forEach(function (unit) {
        unit.targetingUnit = null;
        unit.movingDirection = null;
        unit.unitState = UnitState.Idle;
        unit.unitStateStartedAt = state.ticks;
    });
    state.fallenUnits.push({
        id: unit.id,
        ownedByPlayer: unit.ownedByPlayer,
        unitType: unit.unitType,
        unitFallenAt: state.ticks,
        position: unit.position,
        direction: unit.direction
    });
}
//# sourceMappingURL=registerUnitFallen.js.map