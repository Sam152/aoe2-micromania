import {GameState, UnitInstance} from '../../../../types';
import UnitState from '../../../units/UnitState';
import {getAttackRange} from '../../../util/inAttackRange';
import {hasScalarValue} from '../../../util/hasValue';
import {createUnitQuadtree} from '../../../util/buildQuadTree';
import {Quadtree} from 'd3-quadtree';

export default function autoAttack(state: GameState) {
    const autoAttackingUnits = state.units.filter((unit) => {
        return (
            unit.unitState === UnitState.Idle ||
            hasScalarValue(unit.patrollingTo)
        ) && (
            !hasScalarValue(unit.targetingUnit) ||
            !hasScalarValue(unit.targetingPosition)
        );
    });

    const quadtrees: {[key: number]: Quadtree<UnitInstance>} = {
        1: createUnitQuadtree(),
        2: createUnitQuadtree(),
    };
    quadtrees[1].addAll(state.units.filter(({ownedByPlayer}) => ownedByPlayer === 1));
    quadtrees[2].addAll(state.units.filter(({ownedByPlayer}) => ownedByPlayer === 2));

    autoAttackingUnits.forEach((attackingUnit) => {
        const searchQuadTree = attackingUnit.ownedByPlayer === 1 ? quadtrees[2] : quadtrees[1];
        const closest = searchQuadTree.find(attackingUnit.position.x, attackingUnit.position.y, getAttackRange(attackingUnit));
        if (closest) {
            attackingUnit.targetingUnit = closest.id;
        }
    });
}
