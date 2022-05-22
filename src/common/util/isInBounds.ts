import {Vector2} from 'three/src/math/Vector2';
import Grid from '../terrain/Grid';
import config from '../config';

// Precompute as many constants as possible.
const tileGradient = config.tileHeight / config.tileWidth;
const negativeTileGradient = tileGradient * -1;
const halfTileHeight = config.tileHeight / 2;
const oneAndAHalfTileHeight = config.tileHeight * 1.5;

type gradientFunction = (x: number, mapSize: number) => number;

export const bottomLeft = (x: number, mapSize: number) => tileGradient * x + (mapSize * halfTileHeight);
export const topRight = (x: number, mapSize: number) => tileGradient * x - (mapSize * halfTileHeight);
export const topLeft = (x: number, mapSize: number) => negativeTileGradient * x + (mapSize * halfTileHeight);
export const bottomRight = (x: number, mapSize: number) => negativeTileGradient * x + (mapSize * oneAndAHalfTileHeight);

export function isBelowLine(func: gradientFunction, point: Vector2, mapSize: number) {
    return func(point.x, mapSize) < point.y;
}
export function isAboveLine(func: gradientFunction, point: Vector2, mapSize: number) {
    return func(point.x, mapSize) > point.y;
}

export default function isInBounds(point: Vector2, mapSize: number) {
    return isBelowLine(topLeft, point, mapSize) &&
        isBelowLine(topRight, point, mapSize) &&
        isAboveLine(bottomLeft, point, mapSize) &&
        isAboveLine(bottomRight, point, mapSize);
}

export function addWithClamp(position: Vector2, addition: Vector2, mapSize: number) {
    if (isInBounds(position.clone().add(addition), mapSize)) {
        position.add(addition);
    }
}

export function setWithClamp(position: Vector2, newPosition: Vector2, mapSize: number) {
    if (isInBounds(newPosition, mapSize)) {
        position.set(newPosition.x, newPosition.y);
    }
}
