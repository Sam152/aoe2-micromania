import calculateUnitMovementPerTick from '../units/calculateUnitMovementPerTick';
export default function ticksToDestination(unit, destination) {
    var distance = unit.position.distanceTo(destination);
    return distance === 0 ?
        0 :
        Math.ceil(distance / calculateUnitMovementPerTick(unit).length());
}
//# sourceMappingURL=ticksToDestination.js.map