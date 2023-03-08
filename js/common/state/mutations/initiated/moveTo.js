import stopUnit from './stopUnit';
import formationManager from '../../../units/formations/FormationManager';
import setUnitMovementTowards, { setUnitMovementTowardsCurrentWaypoint } from './setUnitMovementTowards';
import averageVector from '../../../util/averageVector';
import populationVector from '../../../util/populationVector';
import config from '../../../config';
import addUnitReformingSpeedFactor from '../../../util/addUnitReformingSpeedFactor';
export default function moveTo(state, units, destination) {
    units.forEach(function (unit) { return stopUnit(unit); });
    var positions = units.map(function (unit) { return unit.position; });
    formationManager.fromPopulation(units).form(positions, destination).forEach(function (formationPosition, index) {
        units[index].waypoints = [formationPosition];
        setUnitMovementTowardsCurrentWaypoint(state, units[index]);
    });
    var position = averageVector(positions);
    if (units.length > 2 && position.distanceTo(destination) > config.movingReformDistance * 1.5) {
        var reformAt = position.add(populationVector(units, 'movingDirection').multiplyScalar(config.movingReformDistance));
        formationManager.fromPopulation(units).form(positions, reformAt).forEach(function (formationPosition, index) {
            units[index].reformingTo = formationPosition;
            setUnitMovementTowards(state, units[index], units[index].reformingTo);
            units[index].reformingArrivalTick = units[index].arrivalTick;
        });
        addUnitReformingSpeedFactor(state.ticks, units);
    }
}
//# sourceMappingURL=moveTo.js.map