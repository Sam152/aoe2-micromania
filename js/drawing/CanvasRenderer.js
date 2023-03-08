import { circle } from "./shapes";
var CanvasRenderer = (function () {
    function CanvasRenderer(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.context.canvas.width = window.innerWidth;
        this.context.canvas.height = window.innerHeight;
    }
    CanvasRenderer.prototype.render = function (gameState, clientState) {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
        gameState.units.map(function (unit) { return circle(_this.context, unit.position.x, unit.position.y, 10); });
    };
    return CanvasRenderer;
}());
export default CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map