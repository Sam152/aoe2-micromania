import UnitState from '../../../units/UnitState';
import { getAttackRange } from '../../../util/inAttackRange';
import { hasScalarValue } from '../../../util/hasValue';
import { createUnitQuadtree } from '../../../util/buildQuadTree';
export default function autoAttack(state) {
    var autoAttackingUnits = state.units.filter(function (unit) {
        return (unit.unitState === UnitState.Idle ||
            hasScalarValue(unit.patrollingTo)) && (!hasScalarValue(unit.targetingUnit) ||
            !hasScalarValue(unit.targetingPosition));
    });
    var quadtrees = {
        1: createUnitQuadtree(),
        2: createUnitQuadtree()
    };
    quadtrees[1].addAll(state.units.filter(function (_a) {
        var ownedByPlayer = _a.ownedByPlayer;
        return ownedByPlayer === 1;
    }));
    quadtrees[2].addAll(state.units.filter(function (_a) {
        var ownedByPlayer = _a.ownedByPlayer;
        return ownedByPlayer === 2;
    }));
    autoAttackingUnits.forEach(function (attackingUnit) {
        var searchQuadTree = attackingUnit.ownedByPlayer === 1 ? quadtrees[2] : quadtrees[1];
        var closest = searchQuadTree.find(attackingUnit.position.x, attackingUnit.position.y, getAttackRange(attackingUnit));
        if (closest) {
            attackingUnit.targetingUnit = closest.id;
        }
    });
}
//# sourceMappingURL=autoAttack.js.map