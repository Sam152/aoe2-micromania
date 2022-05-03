import stopUnit from '../initiated/stopUnit';
import {GameState} from '../../../../types';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import {setUnitMovementTowardsCurrentWaypoint} from '../initiated/setUnitMovementTowards';
import hasValue from "../../../util/hasValue";

export default function moveUnits(state: GameState) {
    // Move all units that have some active waypoint.
    state.units
        .filter(({waypoints, reformingTo}) => waypoints.length > 0 && !hasValue(reformingTo))
        .forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
        if (state.ticks === unit.arrivalTick) {
            unit.position = unit.waypoints.shift();

            if (unit.waypoints.length) {
                setUnitMovementTowardsCurrentWaypoint(state, unit);
            } else {
                stopUnit(unit);
            }
        }
    });
}
