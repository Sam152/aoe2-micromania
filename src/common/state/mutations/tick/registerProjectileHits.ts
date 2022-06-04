import {GameState} from '../../../../types';
import calculateDamage from '../../../units/calculateDamage';
import registerUnitFallen from './registerUnitFallen';
import unitMetadataFactory from '../../../units/unitMetadataFactory';
import projectileMetadata from '../../../units/projectileMetadata';
import pointInCircle from "../../../util/pointInCircle";
import soundManager from "../../../sounds/SoundManger";

export default function registerProjectileHits(state: GameState) {
    const landedProjectiles = state.projectiles.filter(({arrivingTick}) => arrivingTick === state.ticks);

    const damageProjectiles = landedProjectiles.filter(({hasDamage}) => hasDamage);
    const areaProjectiles = damageProjectiles.filter(({type}) => projectileMetadata[type].damageIsAreaOfEffect);
    const standardProjectiles = damageProjectiles.filter(({type}) => !projectileMetadata[type].damageIsAreaOfEffect);

    damageProjectiles.map(damageProjectile => soundManager.projectileLanded(state, damageProjectile));

    standardProjectiles.forEach((projectile) => {
        const hitUnit = state.units.find((unit) => pointInCircle(unit.position, unitMetadataFactory.getUnit(unit.unitType).hitBox, projectile.destination));
        if (hitUnit) {
            const damage = calculateDamage(projectile.firedByType, hitUnit.unitType);
            // Only do half damage to units that weren't directly targeted.
            hitUnit.hitPoints -= projectile.targeting && hitUnit.id === projectile.targeting ? damage : damage / 2;
            if (hitUnit.hitPoints <= 0) {
                registerUnitFallen(state, hitUnit);
            }
        }
    });

    areaProjectiles.forEach((projectile) => {
        const area = unitMetadataFactory.getUnit(projectile.firedByType).areaOfEffect;
        const damagedUnits: Array<number> = [];
        area.forEach(({distanceFromTarget, percentageOfAttack}) => {
            const affectedUnits = state.units
                // Find units within the radius of the blast.
                .filter(({position}) => position.distanceTo(projectile.destination) < distanceFromTarget)
                // That haven't already been damaged.
                .filter(({id}) => !damagedUnits.includes(id));
            affectedUnits.forEach((affectedUnit) => {
                affectedUnit.hitPoints -= calculateDamage(projectile.firedByType, affectedUnit.unitType) * percentageOfAttack;
                damagedUnits.push(affectedUnit.id);
                if (affectedUnit.hitPoints <= 0) {
                    registerUnitFallen(state, affectedUnit);
                }
            });
        });
    });

    // Remove landed projectiles from the game state.
    state.projectiles = state.projectiles.filter(({id}) => !landedProjectiles.map(({id}) => id).includes(id));
}
