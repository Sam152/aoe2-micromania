import { setUnitMovementTowards, setUnitMovementTowardsCurrentWaypoint } from "../initiated/setUnitMovementTowards.ts";
import { GameState } from "../../../../types.d.ts";
import { hasValue } from "../../../util/hasValue.ts";
import { UnitState } from "../../../units/UnitState.ts";
import { stopUnit } from "../initiated/stopUnit.ts";
import { calculateUnitMovementPerTick } from "../../../units/calculateUnitMovementPerTick.ts";

export function reformUnits(state: GameState) {
  // Move units that are reforming.
  state.units
    .filter(
      ({ reformingTo, unitState, targetingUnit }) =>
        hasValue(reformingTo) && !hasValue(targetingUnit) && unitState === UnitState.Moving,
    )
    .forEach(function (unit) {
      unit.position.add(calculateUnitMovementPerTick(unit)!);
    });

  // Get units moving again, after falling idle in the middle of reforming (ie they stopped to fire at something).
  state.units
    .filter(({ reformingTo, unitState }) => hasValue(reformingTo) && unitState === UnitState.Idle)
    .forEach(function (unit) {
      setUnitMovementTowards(state, unit, unit.reformingTo!);
      // If a unit has stopped to fire at a target, give up on trying to uniformly arrive at a destination
      // at the same time as its peers, just get there eventually.
      unit.reformingArrivalTick = unit.arrivalTick;
    });

  state.units
    .filter(({ reformingArrivalTick }) => reformingArrivalTick === state.ticks)
    .forEach(function (unit) {
      unit.reformingTo = undefined;
      unit.reformingArrivalTick = undefined;
      unit.reformingSpeedFactor = undefined;

      if (unit.waypoints.length) {
        setUnitMovementTowardsCurrentWaypoint(state, unit);
      } else if (unit.patrollingTo) {
        setUnitMovementTowards(state, unit, unit.patrollingTo);
      } else {
        stopUnit(unit);
      }
    });
}
