import { UnitState } from "../../../units/UnitState.ts";
import { unitMetadataFactory } from "../../../units/unitMetadataFactory.ts";
import { config } from "../../../config.ts";
import { GameState } from "../../../../types.ts";

import { hasValue } from "../../../util/hasValue.ts";
import { calculateUnitMovementPerTick } from "../../../units/calculateUnitMovementPerTick.ts";
import { ticksForAnimation } from "../../../util/ticksForAnimation.ts";
import { inAttackRange, inMinimumRange } from "../../../util/inAttackRange.ts";
import { setUnitMovementAwayFrom, setUnitMovementTowards } from "../initiated/setUnitMovementTowards.ts";
import { compassDirectionCalculator } from "../../../units/compassDirectionCalculator.ts";
import { soundManager } from "../../../sounds/SoundManger.ts";

import { ComputedTickState } from "../../computed/createComputedTickState.ts";
import { projectileMetadata } from "../../../units/projectileMetadata.ts";
import { computeAimingFor } from "./computeAimingFor.ts";

export function fireProjectiles(state: GameState, computed: ComputedTickState) {
  const fireUnits = computed.nonMonkUnits();

  // Check if a unit should be firing or moving towards its target.
  fireUnits
    .filter(
      (unit) =>
        (hasValue(unit.targetingUnit) || hasValue(unit.targetingPosition)) && unit.unitState !== UnitState.Firing,
    )
    .forEach((unit) => {
      if (unit.targetingUnit && !computed.unitsById()[unit.targetingUnit]) {
        unit.targetingUnit = undefined;
        unit.unitState = UnitState.Idle;
        return;
      }

      const targetingPosition =
        (unit.targetingUnit ? computed.unitsById()[unit.targetingUnit!]!.position : unit.targetingPosition)!;

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
      if (unit.targetingUnit && !computed.unitsById()[unit.targetingUnit]) {
        unit.targetingUnit = undefined;
        unit.unitState = UnitState.Idle;
        return;
      }

      const aimingFor = (unit.targetingUnit
        ? computeAimingFor({ targetingUnit: computed.unitsById()[unit.targetingUnit!]!, unit, state })
        : unit.targetingPosition)!;

      const unitData = unitMetadataFactory.getUnit(unit.unitType);
      const firingFrame = Math.ceil((unitData.attackFrameDelay / config.gameSpeed) * config.ticksPerSecond);
      const idleFrame = ticksForAnimation(unitData.animations[UnitState.Firing].animationDuration);

      unit.direction = compassDirectionCalculator.getDirection(unit.position, aimingFor);

      if (state.ticks - unit.unitStateStartedAt === firingFrame) {
        soundManager.projectileLaunched(state, unitData.firesProjectileType);

        const id = state.idAt++;

        const startingPoint = unit.position.clone().add(unitData.firingAnchor);
        const landedPosition = unitData.accuracyFunction({
          entropy: id,
          startingPoint,
          aimingFor,
        });

        const targetingUnit = computed.unitsById()[unit.targetingUnit!];
        const distance = unit.position.distanceTo(landedPosition);

        state.projectiles.push({
          id,
          ownedBy: unit.ownedByPlayer,
          type: unitData.firesProjectileType,
          startingPoint: startingPoint,
          destination: landedPosition.clone(),
          startingTick: state.ticks,
          arrivingTick: Math.floor(state.ticks + distance / projectileMetadata[unitData.firesProjectileType]!.speed),
          pathVector: landedPosition.clone().sub(startingPoint),
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
