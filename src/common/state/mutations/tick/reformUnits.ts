import setUnitMovementTowards, {setUnitMovementTowardsCurrentWaypoint} from '../initiated/setUnitMovementTowards';
import {GameState} from '../../../../types';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import hasValue from "../../../util/hasValue";
import UnitState from "../../../units/UnitState";

export default function reformUnits(state: GameState) {
    state.units
        .filter(({reformingTo, unitState}) => hasValue(reformingTo)  && unitState === UnitState.Moving)
        .forEach(function (unit) {
            unit.position.add(calculateUnitMovementPerTick(unit));
        });

    state.units.filter(({reformingArrivalTick}) => reformingArrivalTick === state.ticks).forEach(function (unit) {
        unit.reformingTo = null;
        unit.reformingArrivalTick = null;
        unit.reformingSpeedFactor = null;

        if (unit.waypoints.length) {
            setUnitMovementTowardsCurrentWaypoint(state, unit);
        }
        if (unit.patrollingTo) {
            setUnitMovementTowards(state, unit, unit.patrollingTo);
        }
    });
}
