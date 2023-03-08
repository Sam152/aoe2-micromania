import calculateUnitMovementPerTick from '../units/calculateUnitMovementPerTick';
import config from '../config';
export default function addUnitReformingSpeedFactor(ticks, units) {
    if (units.length < 2) {
        throw new Error('Should only reform more than one unit.');
    }
    var distances = [];
    var ticksForReform = [];
    units.forEach(function (unit) {
        var distanceToReform = unit.reformingTo.distanceTo(unit.position);
        distances.push(distanceToReform);
        ticksForReform.push(distanceToReform !== 0 ? Math.floor(distanceToReform / calculateUnitMovementPerTick(unit).length()) : 0);
    });
    var maxDistance = Math.max.apply(Math, distances);
    var arrivalTick = Math.max.apply(Math, ticksForReform);
    var speedFactors = distances.map(function (distance) { return distance / maxDistance; });
    var smallestSpeedFactor = Math.min.apply(Math, speedFactors);
    var catchUpFactor = Math.min(config.maximumReformSpeedFactor, 1 / smallestSpeedFactor);
    units.forEach(function (unit, index) {
        unit.reformingSpeedFactor = (distances[index] / maxDistance) * catchUpFactor;
        unit.reformingArrivalTick = ticks + Math.ceil(arrivalTick / catchUpFactor);
    });
}
//# sourceMappingURL=addUnitReformingSpeedFactor.js.map