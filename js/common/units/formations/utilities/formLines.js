var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Vector2 } from 'three/src/math/Vector2';
import averageVector from '../../../util/averageVector';
import rotateAroundOrigin from '../../../util/rotateAroundOrigin';
import standardDeviation from 'just-standard-deviation';
export default function formLines(positions, destination, rows, columns, startingPoint, distanceBetween) {
    return positions.map(function (position, index) {
        var row = Math.ceil((index + 1) / columns);
        return destination.clone().add(new Vector2((index % columns) * distanceBetween, row * distanceBetween));
    });
}
export function translateAndRotate(positions, newPositions, destination, startingPoint) {
    var offsetFromDestination = averageVector(newPositions).sub(destination);
    newPositions.map(function (newPosition) { return newPosition.sub(offsetFromDestination); });
    var directionalAngle = destination.clone().sub(startingPoint).angle() + (Math.PI / 2);
    newPositions = newPositions.map(function (newPosition) { return rotateAroundOrigin(destination, newPosition, directionalAngle); });
    var _a = sortIntoShortestDistance(newPositions, positions), newPositionsA = _a[0], travelA = _a[1];
    var _b = sortIntoShortestDistance(newPositions, __spreadArray([], positions, true).reverse()), newPositionsB = _b[0], travelB = _b[1];
    var bestFormationMapping = Math.min(travelA, travelB);
    if (bestFormationMapping === travelA) {
        return newPositionsA;
    }
    if (bestFormationMapping === travelB) {
        return newPositionsB.reverse();
    }
}
function sortIntoShortestDistance(newPositions, positions) {
    var newPositionIndexes = Array.from(Array(newPositions.length).keys());
    var usedIndexes = [];
    var distancesTraveled = [];
    var sortedIntoShortestTravel = positions.map(function (position, positionIndex) {
        var candidates = newPositionIndexes.filter(function (candidate) { return usedIndexes.indexOf(candidate) === -1; });
        var distances = candidates.map(function (candidate) { return newPositions[candidate].distanceTo(position); });
        var shortestDistance = Math.min.apply(Math, distances);
        distancesTraveled.push(shortestDistance);
        var shortestDistanceIndex = candidates[distances.indexOf(shortestDistance)];
        usedIndexes.push(shortestDistanceIndex);
        return newPositions[shortestDistanceIndex];
    });
    return [
        sortedIntoShortestTravel,
        newPositions.length === 2 ?
            distancesTraveled[0] + distancesTraveled[1] :
            standardDeviation(distancesTraveled),
    ];
}
//# sourceMappingURL=formLines.js.map