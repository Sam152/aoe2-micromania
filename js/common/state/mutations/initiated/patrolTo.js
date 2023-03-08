import stopUnit from './stopUnit';
import averageVector from '../../../util/averageVector';
import formationManager from '../../../units/formations/FormationManager';
import setUnitMovementTowards from './setUnitMovementTowards';
import addUnitReformingSpeedFactor from '../../../util/addUnitReformingSpeedFactor';
export default function patrolTo(state, units, position) {
    units.forEach(function (unit) { return stopUnit(unit); });
    if (units.length > 1) {
        var positions = units.map(function (unit) { return unit.position; });
        patrolGroupTo(state, units, positions, position);
    }
    else if (units.length === 1) {
        units[0].patrollingTo = position.clone();
        units[0].patrollingToReturn = units[0].position.clone();
        setUnitMovementTowards(state, units[0], units[0].patrollingTo);
    }
}
export function patrolGroupTo(state, units, startingPositions, destination) {
    var startingPosition = averageVector(startingPositions);
    formationManager.fromPopulation(units).form(startingPositions, destination).forEach(function (formationPosition, index) {
        units[index].patrollingToReturn = formationPosition;
    });
    var groupTravelledVector = averageVector(units.map(function (_a) {
        var patrollingToReturn = _a.patrollingToReturn;
        return patrollingToReturn;
    })).sub(startingPosition);
    units.map(function (unit) {
        unit.patrollingTo = unit.patrollingToReturn.clone().sub(groupTravelledVector);
        unit.reformingTo = unit.patrollingToReturn.clone();
        setUnitMovementTowards(state, unit, unit.reformingTo);
    });
    addUnitReformingSpeedFactor(state.ticks, units);
}
//# sourceMappingURL=patrolTo.js.map