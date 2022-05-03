import unitsInGameState from "../../../util/unitsInGameState";
import populationHas from "../../../util/populationHas";
import populationVector from "../../../util/populationVector";
import {patrolGroupTo} from "./patrolTo";
import averageVector from "../../../util/averageVector";
import moveTo from "./moveTo";
import config from "../../../config";
import formationManager from "../../../units/formations/FormationManager";
import setUnitMovementTowards from "./setUnitMovementTowards";
import addUnitReformingSpeedFactor from "../../../util/addUnitReformingSpeedFactor";
import FormationType from "../../../units/formations/FormationType";
import {GameState, UnitId} from "../../../../types";

export default function changeFormation(state: GameState, action: { formation: FormationType; units: UnitId[]; }) {
    const units = unitsInGameState(state, action.units);
    units.forEach((unit) => unit.formation = action.formation);

    if (units.length < 2) {
        return;
    }

    if (populationHas(units, 'patrollingTo')) {
        // Patrolling units can simply patrol again, since they already reform at their destination location.
        if (populationHas(units, 'reformingTo')) {
            const destination = populationVector(units, 'reformingTo')
            const returningTo = units.map(({patrollingTo}) => patrollingTo);
            patrolGroupTo(state, units, returningTo, destination);
        }
        else {
            const destination = populationVector(units, 'patrollingTo');
            const returningTo = units.map(({patrollingToReturn}) => patrollingToReturn);
            patrolGroupTo(state, units, returningTo, destination);
        }
    } else if (populationHas(units, 'waypoints')) {
        // Moving units can be instructed to move again, because moving will auto-reform at the source.
        const destinations = units.map(({waypoints}) => waypoints[0]).filter(waypoint => waypoint);
        const destination = averageVector(destinations);
        moveTo(state, units, destination);
    } else {
        // Idle units should reform where they stand.
        const reformPosition = populationVector(units, 'position');
        const positions = units.map(({position}) => position);
        formationManager.fromPopulation(units).form(positions, reformPosition).forEach((formationPosition, index) => {
            units[index].reformingTo = formationPosition;
            setUnitMovementTowards(state, units[index], units[index].reformingTo);
            units[index].reformingArrivalTick = units[index].arrivalTick;
        });
        addUnitReformingSpeedFactor(state.ticks, units);
    }
}
