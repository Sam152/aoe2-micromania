import { UnitInstance } from "../../types.ts";
import { getAttackRange } from "./inAttackRange.ts";

/**
 * Finds the closest unit (within attack range) not owned by the given player.
 *
 * A brute-force alternative to `closestUnitNotOwnedBy`, which uses a per-player
 * quad tree. At the unit counts seen in a typical game (tens, not thousands) the
 * quad tree's build cost and the wide search radius (attack range covers most of
 * the battlefield) make it slower than a flat scan — see `autoAttack.bench.ts`.
 * This scan uses squared distance to avoid a sqrt per candidate and skips the
 * intermediate array allocation a `filter().reduce()` would incur.
 *
 * Ties (two enemies at exactly the same distance) resolve to whichever appears
 * first in `units`, which is stable, so the simulation stays deterministic.
 */
export function closestUnitNotOwnedByBruteForce(
  notOwnedBy: number,
  attackingUnit: UnitInstance,
  units: UnitInstance[],
): UnitInstance | undefined {
  const range = getAttackRange(attackingUnit);
  const { x, y } = attackingUnit.position;

  let closestUnit: UnitInstance | undefined;
  let closestDistanceSquared = range * range;

  for (let i = 0; i < units.length; i++) {
    const candidate = units[i];
    if (candidate.ownedByPlayer === notOwnedBy) {
      continue;
    }
    const dx = candidate.position.x - x;
    const dy = candidate.position.y - y;
    const distanceSquared = dx * dx + dy * dy;
    if (distanceSquared < closestDistanceSquared) {
      closestDistanceSquared = distanceSquared;
      closestUnit = candidate;
    }
  }

  return closestUnit;
}
