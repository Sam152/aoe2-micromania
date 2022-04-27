import setUnitMovementTowardsCurrentWaypoint, {setUnitMovementTowards} from './setUnitMovementTowardsCurrentWaypoint';
import {GameState} from '../../../types';
import calculateUnitMovementPerTick from '../../units/calculateUnitMovementPerTick';
import config from "../../config";
import hasValue from "../../util/hasValue";

export default function reformUnits(state: GameState) {
    state.units.filter(({reformingTo}) => hasValue(reformingTo)).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit, unit.reformingSpeedFactor));
        if (unit.position.distanceTo(unit.reformingTo) < config.arrivalDistance) {
            unit.reformingTo = null;
            unit.reformingSpeedFactor = null;
        }
    });

    state.units.filter(({reformingArrivalTick}) => reformingArrivalTick === state.ticks).forEach(function(unit) {
        unit.reformingArrivalTick = null;
        if (unit.waypoints.length) {
            setUnitMovementTowardsCurrentWaypoint(unit);
        }
        if (unit.patrollingTo) {
            setUnitMovementTowards(unit, unit.patrollingTo);
        }
    });
}
