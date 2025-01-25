import UnitState from "../../../units/UnitState";
import { GameState, UnitInstance } from "../../../../types";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick";
import inAttackRange from "../../../util/inAttackRange";
import setUnitMovementTowards from "../initiated/setUnitMovementTowards";
import compassDirectionCalculator from "../../../units/compassDirectionCalculator";

export default function convertUnits(state: GameState) {
  const convertingUnits = state.units.filter((unit) => unit.convertingUnit !== undefined);

  // Check if a unit should be firing or moving towards its target.
  convertingUnits
    // .filter((unit) => unit.unitState !== UnitState.Firing)
    .forEach((monk) => {
      const convertingUnit = state.units.find(({ id }) => id === monk.convertingUnit);
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
      } else {
        setUnitMovementTowards(state, monk, targetingPosition);
        monk.position.add(calculateUnitMovementPerTick(monk));

        // When out of range, do not count towards a conversion tick.
        if (monk.conversionSucceedsAt) {
          monk.conversionSucceedsAt++;
        }
      }
    });

  // convertingUnits.filter((unit) => unit.unitState === UnitState.Firing).forEach((monk) => {});
}

function lockConversionSuccessInNumberTicks(state: GameState, monk: UnitInstance) {
  return 100;
}
