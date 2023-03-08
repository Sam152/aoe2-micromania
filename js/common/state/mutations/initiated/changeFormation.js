import unitsInGameState from '../../../util/unitsInGameState';
import populationHas from '../../../util/populationHas';
import populationVector from '../../../util/populationVector';
import { patrolGroupTo } from './patrolTo';
import averageVector from '../../../util/averageVector';
import moveTo from './moveTo';
import formationManager from '../../../units/formations/FormationManager';
import setUnitMovementTowards from './setUnitMovementTowards';
import addUnitReformingSpeedFactor from '../../../util/addUnitReformingSpeedFactor';
export default function changeFormation(state, action) {
    var units = unitsInGameState(state, action.units);
    units.forEach(function (unit) { return unit.formation = action.formation; });
    if (units.length < 2) {
        return;
    }
    if (populationHas(units, 'patrollingTo')) {
        if (populationHas(units, 'reformingTo')) {
            var destination = populationVector(units, 'reformingTo');
            var returningTo = units.map(function (_a) {
                var patrollingTo = _a.patrollingTo;
                return patrollingTo;
            });
            patrolGroupTo(state, units, returningTo, destination);
        }
        else {
            var destination = populationVector(units, 'patrollingTo');
            var returningTo = units.map(function (_a) {
                var patrollingToReturn = _a.patrollingToReturn;
                return patrollingToReturn;
            });
            patrolGroupTo(state, units, returningTo, destination);
        }
    }
    else if (populationHas(units, 'waypoints')) {
        var destinations = units.map(function (_a) {
            var waypoints = _a.waypoints;
            return waypoints[0];
        }).filter(function (waypoint) { return waypoint; });
        var destination = averageVector(destinations);
        moveTo(state, units, destination);
    }
    else {
        var reformPosition = populationVector(units, 'position');
        var positions = units.map(function (_a) {
            var position = _a.position;
            return position;
        });
        formationManager.fromPopulation(units).form(positions, reformPosition).forEach(function (formationPosition, index) {
            units[index].reformingTo = formationPosition;
            units[index].reformingArrivalTick = units[index].arrivalTick;
            setUnitMovementTowards(state, units[index], units[index].reformingTo);
        });
        addUnitReformingSpeedFactor(state.ticks, units);
    }
}
//# sourceMappingURL=changeFormation.js.map