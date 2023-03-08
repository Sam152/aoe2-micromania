import hasValue from '../../../util/hasValue';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import swapProperties from '../../../util/swapProperties';
import setUnitMovementTowards from '../initiated/setUnitMovementTowards';
import UnitState from '../../../units/UnitState';
export default function patrolUnits(state) {
    state.units
        .filter(function (unit) { return hasValue(unit.patrollingTo) && !hasValue(unit.reformingArrivalTick) && !hasValue(unit.targetingUnit) && unit.unitState === UnitState.Moving; })
        .forEach(function (unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
        if (state.ticks === unit.arrivalTick) {
            unit.position = unit.patrollingTo.clone();
            swapProperties(unit, 'patrollingTo', 'patrollingToReturn');
            setUnitMovementTowards(state, unit, unit.patrollingTo);
        }
    });
    state.units
        .filter(function (unit) { return hasValue(unit.patrollingTo) && !hasValue(unit.reformingArrivalTick) && unit.unitState === UnitState.Idle; })
        .forEach(function (unit) {
        setUnitMovementTowards(state, unit, unit.patrollingTo);
    });
}
//# sourceMappingURL=patrolUnits.js.map