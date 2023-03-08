import unitMetadataFactory from "../game/unitMetadataFactory";
var CanvasRenderer = (function () {
    function CanvasRenderer(canvas, slpManager) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.slpManager = slpManager;
        this.fit();
        window.addEventListener('resize', this.fit.bind(this));
    }
    CanvasRenderer.prototype.fit = function () {
        this.context.canvas.width = window.innerWidth * Math.min(1.5, window.devicePixelRatio);
        this.context.canvas.height = window.innerHeight * Math.min(1.5, window.devicePixelRatio);
    };
    CanvasRenderer.prototype.render = function (gameState, clientState) {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
        gameState.units.map(function (unitInstance) {
            var unitMetadata = unitMetadataFactory.getUnit(unitInstance.unitType);
            var animationMetadata = unitMetadata.animations[unitInstance.unitState];
            var slpAsset = _this.slpManager.getAsset(animationMetadata.slp);
            slpAsset.draw(_this.context, unitInstance.position, animationMetadata.animationDuration, gameState.ticks - unitInstance.unitStateStartedAt, unitInstance.ownedByPlayer, unitInstance.direction, animationMetadata.style);
        });
    };
    return CanvasRenderer;
}());
export default CanvasRenderer;
//# sourceMappingURL=CanvasRenderer.js.map