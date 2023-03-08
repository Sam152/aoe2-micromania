import { Vector2 } from 'three/src/math/Vector2';
import config from '../config';
var gridCache = {};
var Grid = (function () {
    function Grid(size) {
        this.size = size;
        this.tileHalfHeight = config.tileHeight / 2;
        this.tileHalfWidth = config.tileWidth / 2;
        this.gridMiddle = new Vector2((config.tileWidth * size) / 2, (config.tileHeight * size) / 2);
    }
    Grid.fromGameState = function (gameState) {
        if (gridCache[gameState.mapSize]) {
            return gridCache[gameState.mapSize];
        }
        gridCache[gameState.mapSize] = new Grid(gameState.mapSize);
        return gridCache[gameState.mapSize];
    };
    Grid.prototype.tileDrawnAt = function (x, y) {
        var xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
        var yOffset = (-1 * x * this.tileHalfHeight) + (y * this.tileHalfHeight);
        return new Vector2(xOffset, ((this.size - 1) * this.tileHalfHeight) + yOffset);
    };
    Grid.prototype.middleOfTile = function (x, y) {
        var xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
        var yOffset = (-1 * x * this.tileHalfHeight) + (y * this.tileHalfHeight);
        return new Vector2(this.tileHalfWidth + xOffset, (this.size * this.tileHalfHeight) + yOffset);
    };
    Grid.prototype.middleOfGrid = function () {
        return this.gridMiddle;
    };
    Grid.prototype.iterateTiles = function (func) {
        for (var x = 0; x < this.size; x++) {
            for (var y = 0; y < this.size; y++) {
                func(x, y);
            }
        }
    };
    return Grid;
}());
export default Grid;
//# sourceMappingURL=Grid.js.map