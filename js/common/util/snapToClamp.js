import { Vector2 } from 'three/src/math/Vector2';
import config from '../config';
import isInBounds from "./isInBounds";
export function snapToClamp(point, mapSize) {
    if (isInBounds(point, mapSize)) {
        return point.clone();
    }
    var lines = getMapBorderLines(mapSize);
    var smallestDistanceToLine = null;
    var resolvedInsideBoundaryPoint = null;
    lines.forEach(function (line) {
        var insideBoundaryPoint = clampToLine(line, point);
        if (smallestDistanceToLine === null) {
            resolvedInsideBoundaryPoint = insideBoundaryPoint;
            smallestDistanceToLine = point.distanceToSquared(insideBoundaryPoint);
            return;
        }
        var distanceTo = point.distanceToSquared(insideBoundaryPoint);
        if (distanceTo < smallestDistanceToLine) {
            smallestDistanceToLine = distanceTo;
            resolvedInsideBoundaryPoint = insideBoundaryPoint;
        }
    });
    return resolvedInsideBoundaryPoint;
}
export function clampToLine(line, point) {
    return interpolate(line[0], line[1], Math.max(0, Math.min(1, project(line[0], line[1], point))));
}
function getMapBorderLines(mapSize) {
    var topLeftLine = [new Vector2(0, mapSize * config.tileHeight * 0.5), new Vector2(mapSize * config.tileWidth * 0.5, 0)];
    var bottomLeftLine = [new Vector2(0, mapSize * config.tileHeight * 0.5), new Vector2(mapSize * config.tileWidth * 0.5, mapSize * config.tileHeight)];
    var bottomRightLine = [new Vector2(mapSize * config.tileWidth * 0.5, mapSize * config.tileHeight), new Vector2(mapSize * config.tileWidth, mapSize * config.tileHeight * 0.5)];
    var topRightLine = [new Vector2(mapSize * config.tileWidth * 0.5, 0), new Vector2(mapSize * config.tileWidth, mapSize * config.tileHeight * 0.5)];
    return [
        topLeftLine,
        bottomLeftLine,
        bottomRightLine,
        topRightLine,
    ];
}
function interpolate(p1, p2, t) {
    return new Vector2(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);
}
function project(p1, p2, p3) {
    var x21 = p2.x - p1.x;
    var y21 = p2.y - p1.y;
    var x31 = p3.x - p1.x;
    var y31 = p3.y - p1.y;
    return (x31 * x21 + y31 * y21) / (x21 * x21 + y21 * y21);
}
//# sourceMappingURL=snapToClamp.js.map