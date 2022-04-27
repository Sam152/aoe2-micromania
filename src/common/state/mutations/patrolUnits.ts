import {GameState} from '../../../types';
import hasValue from "../../util/hasValue";
import calculateUnitMovementPerTick from "../../units/calculateUnitMovementPerTick";
import config from "../../config";
import swapProperties from "../../util/swapProperties";
import {setUnitMovementTowards} from "./setUnitMovementTowardsCurrentWaypoint";

export default function patrolUnits(state: GameState) {
    state.units.filter(({patrollingTo, reformingTo}) => hasValue(patrollingTo) && !hasValue(reformingTo)).forEach(function(unit) {
        unit.position.add(calculateUnitMovementPerTick(unit));

        if (unit.position.distanceTo(unit.patrollingTo) < config.arrivalDistance) {
            swapProperties(unit, 'patrollingTo', 'patrollingToReturn');
            setUnitMovementTowards(unit, unit.patrollingTo);
        }
    });
}
