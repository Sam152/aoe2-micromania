import { GameState, UnitInstance } from "../../../../types.ts";
import { calculateUnitMovementPerTick } from "../../../units/calculateUnitMovementPerTick.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { unitMetadataFactory } from "../../../units/unitMetadataFactory.ts";
import { projectileMetadata } from "../../../units/projectileMetadata.ts";

export function computeAimingFor(
  { unit, targetingUnit, state }: { targetingUnit: UnitInstance; unit: UnitInstance; state: GameState },
) {
  const hasBallistics = unit.unitType === UnitType.Archer && (state.upgrades[unit.ownedByPlayer].BALLISTICS ?? true);

  if (hasBallistics) {
    // The projectile should be fired at the position where the unit is heading.
    const movementPerTick = calculateUnitMovementPerTick(targetingUnit);

    if (movementPerTick) {
      const unitData = unitMetadataFactory.getUnit(unit.unitType);
      const speed = projectileMetadata[unitData.firesProjectileType]!.speed;

      // The projectile leaves from the firing anchor, not the unit's origin.
      const startingPoint = unit.position.clone().add(unitData.firingAnchor);

      // Solve for the intercept time t where the projectile (travelling `speed` per tick)
      // reaches the target's future position: |D + V·t| = speed·t, which expands to the
      // quadratic (V·V − speed²)t² + 2(D·V)t + (D·D) = 0.
      const d = targetingUnit.position.clone().sub(startingPoint);
      const a = movementPerTick.dot(movementPerTick) - speed * speed;
      const b = 2 * d.dot(movementPerTick);
      const c = d.dot(d);

      const discriminant = b * b - 4 * a * c;
      if (discriminant >= 0) {
        const root = Math.sqrt(discriminant);
        const t = [(-b - root) / (2 * a), (-b + root) / (2 * a)].filter((t) => t > 0).sort((x, y) => x - y)[0];

        if (t !== undefined) {
          return targetingUnit.position.clone().add(movementPerTick.clone().multiplyScalar(t));
        }
      }
    }
  }

  return targetingUnit.position;
}
