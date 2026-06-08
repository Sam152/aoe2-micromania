import { unitsInGameStateComputed } from "../../../util/unitsInGameState.ts";
import { populationHas } from "../../../util/populationHas.ts";
import { populationVector } from "../../../util/populationVector.ts";
import { patrolGroupTo } from "./patrolTo.ts";
import { averageVector } from "../../../util/averageVector.ts";
import { moveTo } from "./moveTo.ts";
import { formationManager } from "../../../units/formations/FormationManager.ts";
import { setUnitMovementTowards } from "./setUnitMovementTowards.ts";
import { addUnitReformingSpeedFactor } from "../../../util/addUnitReformingSpeedFactor.ts";
import { FormationType } from "../../../units/formations/FormationType.ts";
import { GameState, UnitId } from "../../../../types.ts";
import { ComputedTickState } from "../../computed/createComputedTickState.ts";

export function changeFormation(
  state: GameState,
  action: { formation: FormationType; units: UnitId[] },
  computed: ComputedTickState,
) {
  const units = unitsInGameStateComputed(computed, action.units);
  units.forEach((unit) => (unit.formation = action.formation));

  if (units.length < 2) {
    return;
  }

  if (populationHas(units, "patrollingTo")) {
    // Patrolling units can simply patrol again, since they already reform at their destination location.
    if (populationHas(units, "reformingTo")) {
      const destination = populationVector(units, "reformingTo");
      const returningTo = units.map((unit) => unit.patrollingTo ?? unit.position);
      patrolGroupTo(state, units, returningTo, destination);
    } else {
      const destination = populationVector(units, "patrollingTo");
      const returningTo = units.map(({ patrollingToReturn }) => patrollingToReturn!);
      patrolGroupTo(state, units, returningTo, destination);
    }
  } else if (populationHas(units, "waypoints")) {
    // Moving units can be instructed to move again, because moving will auto-reform at the source.
    const destinations = units.map(({ waypoints }) => waypoints[0]).filter((waypoint) => waypoint);
    const destination = averageVector(destinations);
    moveTo(state, units, destination);
  } else {
    // Idle units should reform where they stand.
    const reformPosition = populationVector(units, "position");
    formationManager
      .fromPopulation(units)
      .form(units, reformPosition)
      .forEach((formationPosition, index) => {
        units[index].reformingTo = setUnitMovementTowards(state, units[index], formationPosition);
        units[index].reformingArrivalTick = units[index].arrivalTick;
      });
    addUnitReformingSpeedFactor(state.ticks, units);
  }
}
