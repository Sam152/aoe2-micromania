import UnitState from "../../../units/UnitState";
import { GameState, UnitInstance } from "../../../../types";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick";
import inAttackRange from "../../../util/inAttackRange";
import setUnitMovementTowards from "../initiated/setUnitMovementTowards";
import compassDirectionCalculator from "../../../units/compassDirectionCalculator";
import { ComputedFrameState } from "../../computed/createComputedFrameState";
import stopUnit from "../initiated/stopUnit";

export const CONVERSION_JUICE_TICKS_RECHARGE = 100;

export default function convertUnits(state: GameState, computed: ComputedFrameState) {
  const convertingUnits = state.units.filter((unit) => !!unit.convertingUnit);

  // Check if a unit should be firing or moving towards its target.
  convertingUnits
    // .filter((unit) => unit.unitState !== UnitState.Firing)
    .forEach((monk) => {
      const convertingUnit = computed.unitIndex[monk.convertingUnit];
      if (!convertingUnit) {
        monk.convertingUnit = undefined;
        return;
      }

      const targetingPosition = convertingUnit.position;

      if (inAttackRange(monk, targetingPosition)) {
        monk.movingDirection = null;
        monk.unitState = UnitState.Firing;
        monk.direction = compassDirectionCalculator.getDirection(monk.position, targetingPosition);

        if (!monk.conversionSucceedsAt) {
          monk.conversionSucceedsAt = state.ticks + lockConversionSuccessInNumberTicks(state, monk);
          monk.unitStateStartedAt = state.ticks;
        }

        if (state.ticks === monk.conversionSucceedsAt) {
          const converted = computed.unitIndex[monk.convertingUnit];

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
        monk.position.add(calculateUnitMovementPerTick(monk));

        // When out of range, do not count towards a conversion tick.
        if (monk.conversionSucceedsAt) {
          monk.conversionSucceedsAt++;
        }
      }
    });
}

function lockConversionSuccessInNumberTicks(state: GameState, monk: UnitInstance) {
  return 100;
}
