import { GameState } from "../../../../types.ts";
import { calculateDamage } from "../../../units/calculateDamage.ts";
import { registerUnitFallen } from "./registerUnitFallen.ts";
import { unitMetadataFactory } from "../../../units/unitMetadataFactory.ts";
import { projectileMetadata } from "../../../units/projectileMetadata.ts";
import { pointInCircle } from "../../../util/pointInCircle.ts";
import { soundManager } from "../../../sounds/SoundManger.ts";
import { computeArrowAngle } from "../../../units/computeArrowAngle.ts";
import { ProjectileType } from "../../../units/ProjectileType.ts";

export function registerProjectileHits(state: GameState) {
  const landedProjectiles = state.projectiles.filter(({ arrivingTick }) => arrivingTick === state.ticks);

  const damageProjectiles = landedProjectiles.filter(({ hasDamage }) => hasDamage);
  const areaProjectiles = damageProjectiles.filter(({ type }) => projectileMetadata[type]!.damageIsAreaOfEffect);
  const standardProjectiles = damageProjectiles.filter(({ type }) => !projectileMetadata[type]!.damageIsAreaOfEffect);

  damageProjectiles.map((damageProjectile) => soundManager.projectileLanded(state, damageProjectile));

  standardProjectiles.forEach((projectile) => {
    const hitUnit = state.units.find((unit) =>
      pointInCircle(unit.position, unitMetadataFactory.getUnit(unit.unitType).hitBox, projectile.destination)
    );
    if (hitUnit) {
      const damage = calculateDamage(projectile.firedByType, hitUnit.unitType);
      // Only do half damage to units that weren't directly targeted.
      hitUnit.hitPoints -= projectile.targeting && hitUnit.id === projectile.targeting ? damage : damage / 2;
      if (hitUnit.hitPoints <= 0) {
        registerUnitFallen(state, hitUnit);
      }
    } else {
      state.landedArrows.unshift({
        id: projectile.id,
        destination: projectile.destination,
        angle: computeArrowAngle({ arrow: projectile, percentageComplete: 1 }),
      });
    }
  });

  areaProjectiles.forEach((projectile) => {
    const area = unitMetadataFactory.getUnit(projectile.firedByType).areaOfEffect;
    const damagedUnits = new Set<number>();
    area!.forEach(({ distanceFromTarget, percentageOfAttack }) => {
      const affectedUnits = state.units
        // Find units within the radius of the blast.
        .filter(({ position }) => position.distanceTo(projectile.destination) < distanceFromTarget)
        // That haven't already been damaged.
        .filter(({ id }) => !damagedUnits.has(id));
      affectedUnits.forEach((affectedUnit) => {
        affectedUnit.hitPoints -= calculateDamage(projectile.firedByType, affectedUnit.unitType) * percentageOfAttack;
        damagedUnits.add(affectedUnit.id);
        if (affectedUnit.hitPoints <= 0) {
          registerUnitFallen(state, affectedUnit);
        }
      });
    });
  });

  // Remove landed projectiles from the game state.
  const landedIds = new Set(landedProjectiles.map(({ id }) => id));
  state.projectiles = state.projectiles.filter(({ id }) => !landedIds.has(id));

  state.landedRocks.unshift(
    ...landedProjectiles.filter(({ type }) => type === ProjectileType.Rock).map((projectile) => ({
      id: projectile.id,
      destination: projectile.destination,
      landedOnTick: projectile.arrivingTick,
    })),
  );

  // Landed rocks only render a short animation that splashes the ground, so for visual reasons
  // we don't need to keep them for a long time. We could filter them based on ticks and animation
  // duration, but retaining the last 20 is also fine.
  state.landedRocks.splice(20);

  // Keep a good amount of landed arrows on the battlefield.
  state.landedArrows.splice(200);
}
