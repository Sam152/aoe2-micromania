import setUnitMovementTowards, {setUnitMovementTowardsCurrentWaypoint} from '../initiated/setUnitMovementTowards';
import {GameState} from '../../../../types';
import hasValue from '../../../util/hasValue';
import UnitState from '../../../units/UnitState';
import stopUnit from '../initiated/stopUnit';
import addWithClamp from "../../../util/addWithClamp";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick";
import Grid from "../../../terrain/Grid";

export default function reformUnits(state: GameState) {
    // Move units that are reforming.
    state.units
        .filter(({reformingTo, unitState, targetingUnit}) => hasValue(reformingTo) && !hasValue(targetingUnit) && unitState === UnitState.Moving)
        .forEach(function(unit) {
            addWithClamp(unit.position, calculateUnitMovementPerTick(unit), Grid.fromGameState(state));
        });

    // Get units moving again, after falling idle in the middle of reforming (ie they stopped to fire at something).
    state.units
        .filter(({reformingTo, unitState}) => hasValue(reformingTo) && unitState === UnitState.Idle)
        .forEach(function(unit) {
            setUnitMovementTowards(state, unit, unit.reformingTo);
            // If a unit has stopped to fire at a target, give up on trying to uniformly arrive at a destination
            // at the same time as its peers, just get there eventually.
            unit.reformingArrivalTick = unit.arrivalTick;
        });

    state.units.filter(({reformingArrivalTick}) => reformingArrivalTick === state.ticks).forEach(function(unit) {
        unit.reformingTo = null;
        unit.reformingArrivalTick = null;
        unit.reformingSpeedFactor = null;

        if (unit.waypoints.length) {
            setUnitMovementTowardsCurrentWaypoint(state, unit);
        } else if (unit.patrollingTo) {
            setUnitMovementTowards(state, unit, unit.patrollingTo);
        } else {
            stopUnit(unit);
        }
    });
}
