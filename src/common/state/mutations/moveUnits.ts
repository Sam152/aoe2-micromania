import setUnitMovementTowardsCurrentWaypoint from './setUnitMovementTowardsCurrentWaypoint';
import stopUnit from './stopUnit';
import {GameState} from '../../../types';
import calculateUnitMovementPerTick from '../../units/calculateUnitMovementPerTick';
import config from "../../config";

export default function moveUnits(state: GameState) {
    // Move all units that have some active waypoint.
    state.units.filter(({waypoints}) => waypoints.length > 0).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));
        if (unit.position.distanceTo(unit.waypoints[0]) < config.arrivalDistance) {
            unit.waypoints.shift();
            if (unit.waypoints.length) {
                setUnitMovementTowardsCurrentWaypoint(unit);
            } else {
                stopUnit(unit);
            }
        }
    });
}
