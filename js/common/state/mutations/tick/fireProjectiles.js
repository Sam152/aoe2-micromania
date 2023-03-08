import UnitState from '../../../units/UnitState';
import unitMetadataFactory from '../../../units/unitMetadataFactory';
import config from '../../../config';
import projectileMetadata from '../../../units/projectileMetadata';
import hasValue from '../../../util/hasValue';
import calculateUnitMovementPerTick from '../../../units/calculateUnitMovementPerTick';
import ticksForAnimation from '../../../util/ticksForAnimation';
import ProjectileType from '../../../units/ProjectileType';
import { Vector2 } from 'three/src/math/Vector2';
import inAttackRange, { inMinimumRange } from '../../../util/inAttackRange';
import setUnitMovementTowards, { setUnitMovementAwayFrom } from '../initiated/setUnitMovementTowards';
import compassDirectionCalculator from '../../../units/compassDirectionCalculator';
export default function fireProjectiles(state) {
    state.units
        .filter(function (unit) { return (hasValue(unit.targetingUnit) || hasValue(unit.targetingPosition)) && unit.unitState !== UnitState.Firing; })
        .forEach(function (unit) {
        var targetingPosition = hasValue(unit.targetingUnit) ? state.units.find(function (_a) {
            var id = _a.id;
            return id === unit.targetingUnit;
        }).position : unit.targetingPosition;
        if (inMinimumRange(unit, targetingPosition)) {
            setUnitMovementAwayFrom(state, unit, targetingPosition);
            unit.position.add(calculateUnitMovementPerTick(unit));
        }
        else if (inAttackRange(unit, targetingPosition)) {
            unit.movingDirection = null;
            if (unit.reloadsAt <= state.ticks) {
                unit.unitStateStartedAt = state.ticks;
                unit.unitState = UnitState.Firing;
            }
            else {
                unit.unitState = UnitState.Idle;
                unit.unitStateStartedAt = state.ticks;
            }
        }
        else {
            setUnitMovementTowards(state, unit, targetingPosition);
            unit.position.add(calculateUnitMovementPerTick(unit));
        }
    });
    state.units
        .filter(function (_a) {
        var unitState = _a.unitState;
        return unitState === UnitState.Firing;
    })
        .forEach(function (unit) {
        var unitData = unitMetadataFactory.getUnit(unit.unitType);
        var firingFrame = Math.ceil((unitData.attackFrameDelay / config.gameSpeed) * config.ticksPerSecond);
        var idleFrame = ticksForAnimation(unitData.animations[UnitState.Firing].animationDuration);
        var targetingPosition = hasValue(unit.targetingUnit) ? state.units.find(function (_a) {
            var id = _a.id;
            return id === unit.targetingUnit;
        }).position : unit.targetingPosition;
        unit.direction = compassDirectionCalculator.getDirection(unit.position, targetingPosition);
        if (state.ticks - unit.unitStateStartedAt === firingFrame) {
            var targetingUnit_1 = state.units.find(function (_a) {
                var id = _a.id;
                return id === unit.targetingUnit;
            });
            var distance_1 = unit.position.distanceTo(targetingPosition);
            var startingPoint_1 = unit.position.clone().add(unitData.firingAnchor);
            var destinations = unitData.firesProjectileType === ProjectileType.Rock ?
                [
                    targetingPosition.clone(),
                    targetingPosition.clone().add(new Vector2(20, 15)),
                    targetingPosition.clone().add(new Vector2(-14, 12)),
                    targetingPosition.clone().add(new Vector2(-22, -11)),
                    targetingPosition.clone().add(new Vector2(-22, -11)),
                    targetingPosition.clone().add(new Vector2(-13, 30)),
                    targetingPosition.clone().add(new Vector2(30, 30)),
                    targetingPosition.clone().add(new Vector2(15, 15)),
                ] :
                [targetingPosition.clone()];
            destinations.forEach(function (destination, index) {
                state.projectiles.push({
                    id: state.idAt++,
                    ownedBy: unit.ownedByPlayer,
                    type: unitData.firesProjectileType,
                    startingPoint: startingPoint_1,
                    destination: destination,
                    startingTick: state.ticks,
                    arrivingTick: Math.floor(state.ticks + (distance_1 / projectileMetadata[unitData.firesProjectileType].speed)),
                    pathVector: destination.clone().sub(startingPoint_1),
                    targeting: targetingUnit_1 ? targetingUnit_1.id : null,
                    hasDamage: index === 0,
                    firedByType: unit.unitType
                });
            });
            unit.reloadsAt = state.ticks + Math.ceil((unitData.reloadTime / config.gameSpeed) * config.ticksPerSecond);
        }
        if (state.ticks - unit.unitStateStartedAt === idleFrame) {
            unit.unitState = UnitState.Idle;
            unit.unitStateStartedAt = state.ticks;
        }
    });
}
//# sourceMappingURL=fireProjectiles.js.map