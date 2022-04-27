import setUnitMovementTowardsCurrentWaypoint, {setUnitMovementTowards} from './setUnitMovementTowardsCurrentWaypoint';
import {GameState} from '../../../types';
import calculateUnitMovementPerTick from '../../units/calculateUnitMovementPerTick';
import config from "../../config";
import hasValue from "../../util/hasValue";

export default function reformUnits(state: GameState) {

    state.units.filter(({reformingTo}) => hasValue(reformingTo)).forEach(function(unit) {

        // @todo, some units need to arrive at their destination a little slower, since we want all units to end their
        // reform in the same tick. How?
        unit.position.add(calculateUnitMovementPerTick(unit, unit.reformingSpeedFactor));

        if (unit.position.distanceTo(unit.reformingTo) < config.arrivalDistance) {
            unit.reformingTo = null;
            unit.reformingSpeedFactor = null;

            // After reforming continue with whatever else the units were meant to be doing.
            if (unit.waypoints.length) {
                setUnitMovementTowardsCurrentWaypoint(unit);
            }
            if (unit.patrollingTo) {
                setUnitMovementTowards(unit, unit.patrollingTo);
            }
        }
    });
}
