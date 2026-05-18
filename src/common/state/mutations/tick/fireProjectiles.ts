import UnitState from "../../../units/UnitState.ts";
import unitMetadataFactory from "../../../units/unitMetadataFactory.ts";
import config from "../../../config.ts";
import { GameState } from "../../../../types.d.ts";
import projectileMetadata from "../../../units/projectileMetadata.ts";
import hasValue from "../../../util/hasValue.ts";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick.ts";
import ticksForAnimation from "../../../util/ticksForAnimation.ts";
import inAttackRange, { inMinimumRange } from "../../../util/inAttackRange.ts";
import setUnitMovementTowards, { setUnitMovementAwayFrom } from "../initiated/setUnitMovementTowards.ts";
import compassDirectionCalculator from "../../../units/compassDirectionCalculator.ts";
import soundManager from "../../../sounds/SoundManger.ts";
import Unit from "../../../units/Unit.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";

export default function fireProjectiles(state: GameState, computed: ComputedFrameState) {
  const fireUnits = state.units.filter((unit) => unit.unitType !== Unit.Monk);

  // Check if a unit should be firing or moving towards its target.
  fireUnits
    .filter(
      (unit) =>
        (hasValue(unit.targetingUnit) || hasValue(unit.targetingPosition)) && unit.unitState !== UnitState.Firing,
    )
    .forEach((unit) => {
      if (unit.targetingUnit && !computed.unitIndex[unit.targetingUnit]) {
        unit.targetingUnit = undefined;
        unit.unitState = UnitState.Idle;
        return;
      }

      const targetingPosition =
        (unit.targetingUnit ? computed.unitIndex[unit.targetingUnit!]!.position : unit.targetingPosition)!;

      if (inMinimumRange(unit, targetingPosition)) {
        setUnitMovementAwayFrom(state, unit, targetingPosition);
        unit.position.add(calculateUnitMovementPerTick(unit)!);
      } else if (inAttackRange(unit, targetingPosition)) {
        unit.movingDirection = undefined;

        if (unit.reloadsAt <= state.ticks) {
          unit.unitStateStartedAt = state.ticks;
          unit.unitState = UnitState.Firing;
        } else {
          unit.unitState = UnitState.Idle;
          unit.unitStateStartedAt = state.ticks;
        }
      } else {
        setUnitMovementTowards(state, unit, targetingPosition);
        unit.position.add(calculateUnitMovementPerTick(unit)!);
      }
    });

  // Handle the firing component of the attacking phase.
  fireUnits
    .filter(({ unitState }) => unitState === UnitState.Firing)
    .forEach((unit) => {
      if (unit.targetingUnit && !computed.unitIndex[unit.targetingUnit]) {
        unit.targetingUnit = undefined;
        unit.unitState = UnitState.Idle;
        return;
      }

      const targetingPosition =
        (unit.targetingUnit ? computed.unitIndex[unit.targetingUnit!]!.position : unit.targetingPosition)!;

      const unitData = unitMetadataFactory.getUnit(unit.unitType);
      const firingFrame = Math.ceil((unitData.attackFrameDelay / config.gameSpeed) * config.ticksPerSecond);
      const idleFrame = ticksForAnimation(unitData.animations[UnitState.Firing].animationDuration);

      unit.direction = compassDirectionCalculator.getDirection(unit.position, targetingPosition);

      if (state.ticks - unit.unitStateStartedAt === firingFrame) {
        soundManager.projectileLaunched(state, unitData.firesProjectileType);

        const targetingUnit = computed.unitIndex[unit.targetingUnit!];
        const distance = unit.position.distanceTo(targetingPosition);
        const startingPoint = unit.position.clone().add(unitData.firingAnchor);

        state.projectiles.push({
          id: state.idAt++,
          ownedBy: unit.ownedByPlayer,
          type: unitData.firesProjectileType,
          startingPoint: startingPoint,
          destination: targetingPosition.clone(),
          startingTick: state.ticks,
          arrivingTick: Math.floor(state.ticks + distance / projectileMetadata[unitData.firesProjectileType]!.speed),
          pathVector: targetingPosition.clone().sub(startingPoint),
          targeting: targetingUnit ? targetingUnit.id : undefined,
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
