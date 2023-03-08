import config from '../config';
var tileGradient = config.tileHeight / config.tileWidth;
var negativeTileGradient = tileGradient * -1;
var halfTileHeight = config.tileHeight / 2;
var oneAndAHalfTileHeight = config.tileHeight * 1.5;
export var bottomLeft = function (x, mapSize) { return tileGradient * x + (mapSize * halfTileHeight); };
export var topRight = function (x, mapSize) { return tileGradient * x - (mapSize * halfTileHeight); };
export var topLeft = function (x, mapSize) { return negativeTileGradient * x + (mapSize * halfTileHeight); };
export var bottomRight = function (x, mapSize) { return negativeTileGradient * x + (mapSize * oneAndAHalfTileHeight); };
export function isBelowLine(func, point, mapSize) {
    return func(point.x, mapSize) < point.y;
}
export function isAboveLine(func, point, mapSize) {
    return func(point.x, mapSize) > point.y;
}
export default function isInBounds(point, mapSize) {
    return isBelowLine(topLeft, point, mapSize) &&
        isBelowLine(topRight, point, mapSize) &&
        isAboveLine(bottomLeft, point, mapSize) &&
        isAboveLine(bottomRight, point, mapSize);
}
export function addWithClamp(position, addition, mapSize) {
    if (isInBounds(position.clone().add(addition), mapSize)) {
        position.add(addition);
    }
}
export function setWithClamp(position, newPosition, mapSize) {
    if (isInBounds(newPosition, mapSize)) {
        position.set(newPosition.x, newPosition.y);
    }
}
//# sourceMappingURL=isInBounds.js.map