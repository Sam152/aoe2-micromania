import { circle, square } from './shapes';
import { Vector2 } from 'three/src/math/Vector2';
import getUnitInstanceHitBox from '../util/getUnitInstanceHitBox';
import arrayOfSize from '../util/arrayOfSize';
import isInBounds, { bottomLeft, bottomRight, topLeft, topRight } from '../util/isInBounds';
import config from '../config';
import { snapToClamp } from '../util/snapToClamp';
var DebugRenderer = (function () {
    function DebugRenderer(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        window.ctx = this.context;
    }
    DebugRenderer.prototype.bootUp = function () {
        return Promise.resolve();
    };
    DebugRenderer.prototype.render = function (gameState, clientState, clientStateDispatcher) {
        this.drawUnits(gameState);
        this.drawClampSnap(gameState, clientState);
        this.drawBoundary(gameState, clientState);
    };
    DebugRenderer.prototype.drawClampSnap = function (gameState, clientState) {
        if (clientState.lastLeftClick) {
            circle(this.context, snapToClamp(clientState.lastLeftClick, gameState.mapSize), 10, 'purple');
        }
    };
    DebugRenderer.prototype.drawBoundary = function (gameState, clientState) {
        var _this = this;
        arrayOfSize(200).forEach(function (i) {
            var n = i * 5;
            var offset = gameState.mapSize * config.tileHeight;
            circle(_this.context, new Vector2(n, bottomLeft(n, gameState.mapSize)), 1, 'green');
            circle(_this.context, new Vector2(n + offset, topRight(n + offset, gameState.mapSize)), 1, 'blue');
            circle(_this.context, new Vector2(n, topLeft(n, gameState.mapSize)), 1, 'red');
            circle(_this.context, new Vector2(n + offset, bottomRight(n + offset, gameState.mapSize)), 1, 'yellow');
        });
        if (clientState.lastLeftClick) {
            if (isInBounds(clientState.lastLeftClick, gameState.mapSize)) {
                circle(this.context, clientState.lastLeftClick, 10, 'green');
            }
            else {
                circle(this.context, clientState.lastLeftClick, 10, 'red');
            }
        }
    };
    DebugRenderer.prototype.drawUnits = function (gameState) {
        var _this = this;
        gameState.units.forEach(function (unitInstance) {
            _this.context.fillStyle = 'black';
            _this.context.font = '11px Arial';
            _this.context.fillText("".concat(unitInstance.id), unitInstance.position.x - 20, unitInstance.position.y - 40);
            square(_this.context, getUnitInstanceHitBox(unitInstance));
        });
    };
    return DebugRenderer;
}());
export default DebugRenderer;
//# sourceMappingURL=DebugRenderer.js.map