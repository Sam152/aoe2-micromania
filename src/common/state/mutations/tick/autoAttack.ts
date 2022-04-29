import {GameState} from "../../../../types";
import UnitState from "../../../units/UnitState";
import inAttackRange from "../../../util/inAttackRange";
import hasValue from "../../../util/hasValue";

export default function autoAttack(state: GameState) {
    const attackingUnits = state.units.filter(unit => unit.unitState === UnitState.Idle || hasValue(unit.patrollingTo));

    attackingUnits.forEach(attackingUnit => {
        const targets = state.units.filter(({ownedByPlayer}) => ownedByPlayer !== attackingUnit.ownedByPlayer);
        if (targets.length === 0) {
            return;
        }

        const targetDistances = targets.map(({position}) => attackingUnit.position.distanceToSquared(position));
        const closestUnit = targets[targetDistances.indexOf(Math.min(...targetDistances))];
        if (inAttackRange(attackingUnit, closestUnit.position)) {
            attackingUnit.targetingUnit = closestUnit.id;
        }
    });
}
