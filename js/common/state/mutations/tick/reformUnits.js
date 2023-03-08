import setUnitMovementTowards, { setUnitMovementTowardsCurrentWaypoint } from '../initiated/setUnitMovementTowards';
import hasValue from '../../../util/hasValue';
import UnitState from '../../../units/UnitState';
import stopUnit from '../initiated/stopUnit';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
export default function reformUnits(state) {
    state.units
        .filter(function (_a) {
        var reformingTo = _a.reformingTo, unitState = _a.unitState, targetingUnit = _a.targetingUnit;
        return hasValue(reformingTo) && !hasValue(targetingUnit) && unitState === UnitState.Moving;
    })
        .forEach(function (unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
    });
    state.units
        .filter(function (_a) {
        var reformingTo = _a.reformingTo, unitState = _a.unitState;
        return hasValue(reformingTo) && unitState === UnitState.Idle;
    })
        .forEach(function (unit) {
        setUnitMovementTowards(state, unit, unit.reformingTo);
        unit.reformingArrivalTick = unit.arrivalTick;
    });
    state.units.filter(function (_a) {
        var reformingArrivalTick = _a.reformingArrivalTick;
        return reformingArrivalTick === state.ticks;
    }).forEach(function (unit) {
        unit.reformingTo = null;
        unit.reformingArrivalTick = null;
        unit.reformingSpeedFactor = null;
        if (unit.waypoints.length) {
            setUnitMovementTowardsCurrentWaypoint(state, unit);
        }
        else if (unit.patrollingTo) {
            setUnitMovementTowards(state, unit, unit.patrollingTo);
        }
        else {
            stopUnit(unit);
        }
    });
}
//# sourceMappingURL=reformUnits.js.map