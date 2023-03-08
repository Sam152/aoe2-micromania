import getUnitInstanceHitBox from '../../../util/getUnitInstanceHitBox';
import pointInRect from '../../../util/pointInRect';
import calculateDamage from '../../../units/calculateDamage';
import registerUnitFallen from './registerUnitFallen';
import unitMetadataFactory from '../../../units/unitMetadataFactory';
import projectileMetadata from '../../../units/projectileMetadata';
export default function registerProjectileHits(state) {
    var landedProjectiles = state.projectiles.filter(function (_a) {
        var arrivingTick = _a.arrivingTick;
        return arrivingTick === state.ticks;
    });
    var damageProjectiles = landedProjectiles.filter(function (_a) {
        var hasDamage = _a.hasDamage;
        return hasDamage;
    });
    var areaProjectiles = damageProjectiles.filter(function (_a) {
        var type = _a.type;
        return projectileMetadata[type].damageIsAreaOfEffect;
    });
    var standardProjectiles = damageProjectiles.filter(function (_a) {
        var type = _a.type;
        return !projectileMetadata[type].damageIsAreaOfEffect;
    });
    standardProjectiles.forEach(function (projectile) {
        var hitUnit = state.units.find(function (unit) { return pointInRect(getUnitInstanceHitBox(unit), projectile.destination); });
        if (hitUnit) {
            var damage = calculateDamage(projectile.firedByType, hitUnit.unitType);
            hitUnit.hitPoints -= projectile.targeting && hitUnit.id === projectile.targeting ? damage : damage / 2;
            if (hitUnit.hitPoints <= 0) {
                registerUnitFallen(state, hitUnit);
            }
        }
    });
    areaProjectiles.forEach(function (projectile) {
        var area = unitMetadataFactory.getUnit(projectile.firedByType).areaOfEffect;
        var damagedUnits = [];
        area.forEach(function (_a) {
            var distanceFromTarget = _a.distanceFromTarget, percentageOfAttack = _a.percentageOfAttack;
            var affectedUnits = state.units
                .filter(function (_a) {
                var position = _a.position;
                return position.distanceTo(projectile.destination) < distanceFromTarget;
            })
                .filter(function (_a) {
                var id = _a.id;
                return !damagedUnits.includes(id);
            });
            affectedUnits.forEach(function (affectedUnit) {
                affectedUnit.hitPoints -= calculateDamage(projectile.firedByType, affectedUnit.unitType) * percentageOfAttack;
                damagedUnits.push(affectedUnit.id);
                if (affectedUnit.hitPoints <= 0) {
                    registerUnitFallen(state, affectedUnit);
                }
            });
        });
    });
    state.projectiles = state.projectiles.filter(function (_a) {
        var id = _a.id;
        return !landedProjectiles.map(function (_a) {
            var id = _a.id;
            return id;
        }).includes(id);
    });
}
//# sourceMappingURL=registerProjectileHits.js.map