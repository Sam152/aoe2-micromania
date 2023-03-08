import stopUnit from '../initiated/stopUnit';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import { setUnitMovementTowardsCurrentWaypoint } from '../initiated/setUnitMovementTowards';
import hasValue from '../../../util/hasValue';
export default function moveUnits(state) {
    state.units
        .filter(function (_a) {
        var waypoints = _a.waypoints, reformingTo = _a.reformingTo;
        return waypoints.length > 0 && !hasValue(reformingTo);
    })
        .forEach(function (unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
        if (state.ticks === unit.arrivalTick) {
            unit.position = unit.waypoints.shift().clone();
            if (unit.waypoints.length) {
                setUnitMovementTowardsCurrentWaypoint(state, unit);
            }
            else {
                stopUnit(unit);
            }
        }
    });
}
//# sourceMappingURL=moveUnits.js.map