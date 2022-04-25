import {GameState} from '../../../types';
import projectileMetadata from "../../units/projectileMetadata";
import getUnitInstanceHitBox from "../../util/getUnitInstanceHitBox";
import pointInRect from "../../util/pointInRect";
import calculateDamage from "../../units/calculateDamage";
import registerUnitFallen from "./registerUnitFallen";

export default function registerProjectileHits(state: GameState) {
    const landedProjectiles = state.projectiles.filter(({arrivingTick}) => arrivingTick === state.ticks);

    landedProjectiles.filter(({hasDamage}) => hasDamage).forEach((projectile) => {
        const hitUnit = state.units.find((unit) => pointInRect(getUnitInstanceHitBox(unit), projectile.destination));
        if (hitUnit) {
            hitUnit.hp -= calculateDamage(projectile.firedByType, hitUnit.unitType);
            if (hitUnit.hp <= 0) {
                registerUnitFallen(state, hitUnit);
            }
        }
    });

    // Remove landed projectiles from the game state.
    state.projectiles = state.projectiles.filter(({id}) => !landedProjectiles.map(({id}) => id).includes(id));
}
