import { GameState, UnitInstance } from "../../../../types.ts";
import { UnitState } from "../../../units/UnitState.ts";
import { getAttackRange } from "../../../util/inAttackRange.ts";
import { hasScalarValue } from "../../../util/hasValue.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";
import { UnitType } from "../../../units/UnitType.ts";

export function autoAttack(state: GameState, computed: ComputedFrameState) {
  const fireUnits = state.units.filter((unit) => unit.unitType !== UnitType.Monk);
  const autoAttackingUnits = fireUnits.filter((unit) => {
    return (
      (unit.unitState === UnitState.Idle || hasScalarValue(unit.patrollingTo)) &&
      (!hasScalarValue(unit.targetingUnit) || !hasScalarValue(unit.targetingPosition))
    );
  });
  autoAttackingUnits.forEach((attackingUnit) => {
    const closest = closestUnitNotOwnedBy(attackingUnit.ownedByPlayer, attackingUnit, computed);
    if (closest) {
      attackingUnit.targetingUnit = closest.id;
    }
  });
}

export function closestUnitNotOwnedBy(
  notOwnedBy: number,
  attackingUnit: UnitInstance,
  computed: ComputedFrameState,
): UnitInstance | undefined {
  let distance: number;
  let closestUnit: UnitInstance | undefined;

  Object.entries(computed.playerUnitQuadTrees()).forEach(([player, tree]) => {
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
