import {Vector2} from 'three/src/math/Vector2';
import {Line} from '../../types';
import config from '../config';
import isInBounds from "./isInBounds";

export function snapToClamp(point: Vector2, mapSize: number) {
    if (isInBounds(point, mapSize)) {
        return point.clone();
    }

    const lines = getMapBorderLines(mapSize);
    let smallestDistanceToLine: number = null;
    let resolvedInsideBoundaryPoint: Vector2 = null;

    // Find the shortest distance to a point clamped along the four lines
    // that border the map.
    lines.forEach((line) => {
        const insideBoundaryPoint = clampToLine(line, point);
        if (smallestDistanceToLine === null) {
            resolvedInsideBoundaryPoint = insideBoundaryPoint;
            smallestDistanceToLine = point.distanceToSquared(insideBoundaryPoint);
            return;
        }
        const distanceTo = point.distanceToSquared(insideBoundaryPoint);
        if (distanceTo < smallestDistanceToLine) {
            smallestDistanceToLine = distanceTo;
            resolvedInsideBoundaryPoint = insideBoundaryPoint;
        }
    });

    return resolvedInsideBoundaryPoint;
}

/**
 * Math lifted from https://observablehq.com/@mbostock/closest-point-on-line#distance.
 */
export function clampToLine(line: Line, point: Vector2) {
    return interpolate(line[0], line[1], Math.max(0, Math.min(1, project(line[0], line[1], point))));
}

function getMapBorderLines(mapSize: number): Line[] {
    // @todo, can move these calcs to the grid, getRealPixelCoordinateOf(0,0), getRealPixelCoordinateOf(n,n) etc.
    const topLeftLine = [new Vector2(0, mapSize * config.tileHeight * 0.5), new Vector2(mapSize * config.tileWidth * 0.5, 0)] as Line;
    const bottomLeftLine = [new Vector2(0, mapSize * config.tileHeight * 0.5), new Vector2(mapSize * config.tileWidth * 0.5, mapSize * config.tileHeight)] as Line;
    const bottomRightLine = [new Vector2(mapSize * config.tileWidth * 0.5, mapSize * config.tileHeight), new Vector2(mapSize * config.tileWidth, mapSize * config.tileHeight * 0.5)] as Line;
    const topRightLine = [new Vector2(mapSize * config.tileWidth * 0.5, 0), new Vector2(mapSize * config.tileWidth, mapSize * config.tileHeight * 0.5)] as Line;
    return [
        topLeftLine,
        bottomLeftLine,
        bottomRightLine,
        topRightLine,
    ];
}

function interpolate(p1: Vector2, p2: Vector2, t: number) {
    return new Vector2(p1.x + (p2.x - p1.x) * t, p1.y + (p2.y - p1.y) * t);
}

function project(p1: Vector2, p2: Vector2, p3: Vector2) {
    const x21 = p2.x - p1.x; const y21 = p2.y - p1.y;
    const x31 = p3.x - p1.x; const y31 = p3.y - p1.y;
    return (x31 * x21 + y31 * y21) / (x21 * x21 + y21 * y21);
}
