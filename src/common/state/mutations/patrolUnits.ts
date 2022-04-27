import {GameState} from '../../../types';
import hasValue from "../../util/hasValue";
import calculateUnitMovementPerTick from "../../units/calculateUnitMovementPerTick";
import config from "../../config";
import swapProperties from "../../util/swapProperties";
import {setUnitMovementTowards} from "./setUnitMovementTowardsCurrentWaypoint";
import stopUnit from "./stopUnit";

export default function patrolUnits(state: GameState) {
    state.units.filter(({patrollingTo, reformingArrivalTick}) => hasValue(patrollingTo) && !hasValue(reformingArrivalTick)).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));

        if (unit.position.distanceTo(unit.patrollingTo) < config.arrivalDistance) {
            swapProperties(unit, 'patrollingTo', 'patrollingToReturn');
            setUnitMovementTowards(unit, unit.patrollingTo);
        }
    });
}
