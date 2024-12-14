import UnitState from "../../../units/UnitState";
import unitMetadataFactory from "../../../units/unitMetadataFactory";
import config from "../../../config";
import { GameState } from "../../../../types";
import projectileMetadata from "../../../units/projectileMetadata";
import hasValue from "../../../util/hasValue";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick";
import ticksForAnimation from "../../../util/ticksForAnimation";
import inAttackRange, { inMinimumRange } from "../../../util/inAttackRange";
import setUnitMovementTowards, { setUnitMovementAwayFrom } from "../initiated/setUnitMovementTowards";
import compassDirectionCalculator from "../../../units/compassDirectionCalculator";
import soundManager from "../../../sounds/SoundManger";
import Unit from "../../../units/Unit";

export default function fireProjectiles(state: GameState) {
  const fireUnits = state.units.filter((unit) => unit.unitType !== Unit.Monk);

  // Check if a unit should be firing or moving towards its target.
  fireUnits
    .filter(
      (unit) =>
        (hasValue(unit.targetingUnit) || hasValue(unit.targetingPosition)) && unit.unitState !== UnitState.Firing,
    )
    .forEach((unit) => {
      const targetingPosition = hasValue(unit.targetingUnit)
        ? state.units.find(({ id }) => id === unit.targetingUnit).position
        : unit.targetingPosition;

      if (inMinimumRange(unit, targetingPosition)) {
        setUnitMovementAwayFrom(state, unit, targetingPosition);
        unit.position.add(calculateUnitMovementPerTick(unit));
      } else if (inAttackRange(unit, targetingPosition)) {
        unit.movingDirection = null;

        if (unit.reloadsAt <= state.ticks) {
          unit.unitStateStartedAt = state.ticks;
          unit.unitState = UnitState.Firing;
        } else {
          unit.unitState = UnitState.Idle;
          unit.unitStateStartedAt = state.ticks;
        }
      } else {
        setUnitMovementTowards(state, unit, targetingPosition);
        unit.position.add(calculateUnitMovementPerTick(unit));
      }
    });

  // Handle the firing component of the attacking phase.
  fireUnits
    .filter(({ unitState }) => unitState === UnitState.Firing)
    .forEach((unit) => {
      const unitData = unitMetadataFactory.getUnit(unit.unitType);
      const firingFrame = Math.ceil((unitData.attackFrameDelay / config.gameSpeed) * config.ticksPerSecond);
      const idleFrame = ticksForAnimation(unitData.animations[UnitState.Firing].animationDuration);
      const targetingPosition = hasValue(unit.targetingUnit)
        ? state.units.find(({ id }) => id === unit.targetingUnit).position
        : unit.targetingPosition;

      unit.direction = compassDirectionCalculator.getDirection(unit.position, targetingPosition);

      if (state.ticks - unit.unitStateStartedAt === firingFrame) {
        soundManager.projectileLaunched(state, unitData.firesProjectileType);

        const targetingUnit = fireUnits.find(({ id }) => id === unit.targetingUnit);
        const distance = unit.position.distanceTo(targetingPosition);
        const startingPoint = unit.position.clone().add(unitData.firingAnchor);

        state.projectiles.push({
          id: state.idAt++,
          ownedBy: unit.ownedByPlayer,
          type: unitData.firesProjectileType,
          startingPoint: startingPoint,
          destination: targetingPosition.clone(),
          startingTick: state.ticks,
          arrivingTick: Math.floor(state.ticks + distance / projectileMetadata[unitData.firesProjectileType].speed),
          pathVector: targetingPosition.clone().sub(startingPoint),
          targeting: targetingUnit ? targetingUnit.id : null,
          hasDamage: true,
          firedByType: unit.unitType,
        });

        unit.reloadsAt = state.ticks + Math.ceil((unitData.reloadTime / config.gameSpeed) * config.ticksPerSecond);
      }

      if (state.ticks - unit.unitStateStartedAt === idleFrame) {
        unit.unitState = UnitState.Idle;
        unit.unitStateStartedAt = state.ticks;
      }
    });
}
