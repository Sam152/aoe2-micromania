import { GameState, UnitInstance } from "../../../../types.ts";
import { UnitState } from "../../../units/UnitState.ts";
import { getAttackRange } from "../../../util/inAttackRange.ts";
import { hasScalarValue } from "../../../util/hasValue.ts";
import { ComputedTickState } from "../../computed/createComputedTickState.ts";
import { closestUnitNotOwnedByBruteForce } from "../../../util/closestUnitNotOwnedByBruteForce.ts";

export function autoAttack(state: GameState, computed: ComputedTickState) {
  const fireUnits = computed.nonMonkUnits();
  const autoAttackingUnits = fireUnits.filter((unit) => {
    return (
      (unit.unitState === UnitState.Idle || hasScalarValue(unit.patrollingTo)) &&
      (!hasScalarValue(unit.targetingUnit) || !hasScalarValue(unit.targetingPosition))
    );
  });
  autoAttackingUnits.forEach((attackingUnit) => {
    const closest = closestUnitNotOwnedByBruteForce(attackingUnit.ownedByPlayer, attackingUnit, state.units);
    if (closest) {
      attackingUnit.targetingUnit = closest.id;
    }
  });
}

export function closestUnitNotOwnedBy(
  notOwnedBy: number,
  attackingUnit: UnitInstance,
  computed: ComputedTickState,
): UnitInstance | undefined {
  let distance: number;
  let closestUnit: UnitInstance | undefined;

  Object.entries(computed.unitQuadTreesByPlayer()).forEach(([player, tree]) => {
    if (parseInt(player) === notOwnedBy) {
      return;
    }
    const candidate = tree.find(attackingUnit.position.x, attackingUnit.position.y, getAttackRange(attackingUnit));
    if (!candidate) {
      return;
    }
    const candidateDistance = candidate.position.distanceTo(attackingUnit.position);
    if (!closestUnit) {
      closestUnit = candidate;
      distance = candidateDistance;
      return;
    }
    if (candidateDistance < distance) {
      closestUnit = candidate;
      distance = candidateDistance;
      return;
    }
  });
  return closestUnit;
}
