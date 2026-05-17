import { GameState } from "../../../../types.d.ts";
import hasValue from "../../../util/hasValue.ts";
import calculateUnitMovementPerTick from "../../../units/calculateUnitMovementPerTick.ts";
import swapProperties from "../../../util/swapProperties.ts";
import setUnitMovementTowards from "../initiated/setUnitMovementTowards.ts";
import UnitState from "../../../units/UnitState.ts";

export default function patrolUnits(state: GameState) {
  state.units
    .filter(
      (unit) =>
        hasValue(unit.patrollingTo) &&
        !hasValue(unit.reformingArrivalTick) &&
        !hasValue(unit.targetingUnit) &&
        unit.unitState === UnitState.Moving,
    )
    .forEach((unit) => {
      unit.position.add(calculateUnitMovementPerTick(unit));

      if (state.ticks === unit.arrivalTick) {
        unit.position = unit.patrollingTo.clone();
        swapProperties(unit, "patrollingTo", "patrollingToReturn");
        setUnitMovementTowards(state, unit, unit.patrollingTo);
      }
    });

  // If a unit has gone idle, by stopping to fire at a target, get it moving again.
  state.units
    .filter(
      (unit) =>
        hasValue(unit.patrollingTo) && !hasValue(unit.reformingArrivalTick) && unit.unitState === UnitState.Idle,
    )
    .forEach((unit) => {
      setUnitMovementTowards(state, unit, unit.patrollingTo);
    });
}
