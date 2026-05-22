import { stopUnit } from "../initiated/stopUnit.ts";
import { GameState } from "../../../../types.ts";
import { calculateUnitMovementPerTick } from "../../../units/calculateUnitMovementPerTick.ts";
import { setUnitMovementTowardsCurrentWaypoint } from "../initiated/setUnitMovementTowards.ts";
import { hasValue } from "../../../util/hasValue.ts";

export function moveUnits(state: GameState) {
  // Move all units that have some active waypoint.
  state.units
    .filter(({ waypoints, reformingTo }) => waypoints.length > 0 && !hasValue(reformingTo))
    .forEach(function (unit) {
      unit.position.add(calculateUnitMovementPerTick(unit)!);

      if (state.ticks === unit.arrivalTick) {
        unit.position = unit.waypoints.shift()!.clone();

        if (unit.waypoints.length) {
          setUnitMovementTowardsCurrentWaypoint(state, unit);
        } else {
          stopUnit(unit);
        }
      }
    });
}
