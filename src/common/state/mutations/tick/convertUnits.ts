import { UnitState } from "../../../units/UnitState.ts";
import { GameState, UnitInstance } from "../../../../types.d.ts";
import { calculateUnitMovementPerTick } from "../../../units/calculateUnitMovementPerTick.ts";
import { inAttackRange } from "../../../util/inAttackRange.ts";
import { setUnitMovementTowards } from "../initiated/setUnitMovementTowards.ts";
import { compassDirectionCalculator } from "../../../units/compassDirectionCalculator.ts";
import { ComputedFrameState } from "../../computed/createComputedFrameState.ts";
import { stopUnit } from "../initiated/stopUnit.ts";

export const CONVERSION_JUICE_TICKS_RECHARGE = 100;

export function convertUnits(state: GameState, computed: ComputedFrameState) {
  const convertingUnits = state.units.filter((unit) => !!unit.convertingUnit);

  // Check if a unit should be firing or moving towards its target.
  convertingUnits.forEach((monk) => {
    const convertingUnit = computed.unitIndex[monk.convertingUnit!];

    // Either the target of a conversion was already converted, or it cycled out
    // of the unit list.
    if (!convertingUnit || convertingUnit.ownedByPlayer === monk.ownedByPlayer) {
      stopUnit(monk);
      return;
    }

    const targetingPosition = convertingUnit.position;

    if (inAttackRange(monk, targetingPosition)) {
      monk.movingDirection = undefined;
      monk.unitState = UnitState.Firing;
      monk.direction = compassDirectionCalculator.getDirection(monk.position, targetingPosition);

      if (!monk.conversionSucceedsAt) {
        monk.conversionSucceedsAt = state.ticks + lockConversionSuccessInNumberTicks(state, monk);
        monk.unitStateStartedAt = state.ticks;
      }

      if (state.ticks === monk.conversionSucceedsAt) {
        const converted = computed.unitIndex[monk.convertingUnit!];

        if (converted) {
          converted.ownedByPlayer = monk.ownedByPlayer;
          // Give the converted unit a new ID, so existing targeting and client side
          // selections are lost.
          converted.id = state.idAt++;
          stopUnit(converted);

          monk.conversionJuiceFullAt = state.ticks + CONVERSION_JUICE_TICKS_RECHARGE;
        }
        stopUnit(monk);
      }
    } else {
      setUnitMovementTowards(state, monk, targetingPosition);
      monk.position.add(calculateUnitMovementPerTick(monk)!);

      // When out of range, do not count towards a conversion tick.
      if (monk.conversionSucceedsAt) {
        monk.conversionSucceedsAt++;
      }
    }
  });
}

function lockConversionSuccessInNumberTicks(_state: GameState, _monk: UnitInstance) {
  return 100;
}
