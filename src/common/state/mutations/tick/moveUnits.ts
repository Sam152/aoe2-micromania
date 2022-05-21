import stopUnit from '../initiated/stopUnit';
import {GameState} from '../../../../types';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import {setUnitMovementTowardsCurrentWaypoint} from '../initiated/setUnitMovementTowards';
import hasValue from '../../../util/hasValue';
import addWithClamp, {setWithClamp} from '../../../util/addWithClamp';
import Grid from '../../../terrain/Grid';

export default function moveUnits(state: GameState) {
    // Move all units that have some active waypoint.
    state.units
        .filter(({waypoints, reformingTo}) => waypoints.length > 0 && !hasValue(reformingTo))
        .forEach(function(unit) {
            addWithClamp(unit.position, calculateUnitMovementPerTick(unit), Grid.fromGameState(state));

            if (state.ticks === unit.arrivalTick) {
                setWithClamp(unit.position, unit.waypoints.shift(), Grid.fromGameState(state));

                if (unit.waypoints.length) {
                    setUnitMovementTowardsCurrentWaypoint(state, unit);
                } else {
                    stopUnit(unit);
                }
            }
        });
}
