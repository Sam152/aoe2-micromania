import {GameState} from '../../../../types';
import hasValue from '../../../util/hasValue';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import swapProperties from '../../../util/swapProperties';
import setUnitMovementTowards from '../initiated/setUnitMovementTowards';
import UnitState from '../../../units/UnitState';
import addWithClamp, {setWithClamp} from '../../../util/addWithClamp';
import Grid from '../../../terrain/Grid';

export default function patrolUnits(state: GameState) {
    state.units
        .filter((unit) => hasValue(unit.patrollingTo) && !hasValue(unit.reformingArrivalTick) && !hasValue(unit.targetingUnit) && unit.unitState === UnitState.Moving)
        .forEach((unit) => {
            addWithClamp(unit.position, calculateUnitMovementPerTick(unit), Grid.fromGameState(state));

            if (state.ticks === unit.arrivalTick) {
                setWithClamp(unit.position, unit.patrollingTo.clone(), Grid.fromGameState(state));
                swapProperties(unit, 'patrollingTo', 'patrollingToReturn');
                setUnitMovementTowards(state, unit, unit.patrollingTo);
            }
        });

    // If a unit has gone idle, by stopping to fire at a target, get it moving again.
    state.units
        .filter((unit) => hasValue(unit.patrollingTo) && !hasValue(unit.reformingArrivalTick) && unit.unitState === UnitState.Idle)
        .forEach((unit) => {
            setUnitMovementTowards(state, unit, unit.patrollingTo);
        });
}
