import unitMetadataFactory from '../../units/unitMetadataFactory';
import config from '../../config';
import moveTowardsCurrentWaypoint from './moveTowardsCurrentWaypoint';
import stopUnit from './stopUnit';
import {GameState} from '../../../types';
import calculateUnitMovementPerTick from '../../units/calculateUnitMovementPerTick';

export default function moveUnits(state: GameState) {
    // Move all units that have some active waypoint.
    state.units.filter((unit) => unit.waypoints.length > 0).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
        if (unit.position.distanceTo(unit.waypoints[0]) < 5) {
            unit.waypoints.shift();
            if (unit.waypoints.length) {
                moveTowardsCurrentWaypoint(unit);
            } else {
                stopUnit(unit);
            }
        }
    });
}
