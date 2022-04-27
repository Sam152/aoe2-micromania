import moveTowardsCurrentWaypoint from './moveTowardsCurrentWaypoint';
import stopUnit from './stopUnit';
import {GameState} from '../../../types';
import calculateUnitMovementPerTick from '../../units/calculateUnitMovementPerTick';
import hasValue from "../../util/hasValue";

export default function patrolUnits(state: GameState) {
    state.units.filter(({patrollingTo}) => hasValue(patrollingTo)).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));

        // if (unit.position.distanceTo(unit.waypoints[0]) < 5) {
        //     unit.waypoints.shift();
        //     if (unit.waypoints.length) {
        //         moveTowardsCurrentWaypoint(unit);
        //     } else {
        //         stopUnit(unit);
        //     }
        // }
    });
}
