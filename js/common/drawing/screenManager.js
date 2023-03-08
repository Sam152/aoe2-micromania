var ScreenManager = (function () {
    function ScreenManager() {
        this.scale = Math.min(1.5, window.devicePixelRatio);
        this.callbacks = [];
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }
    ScreenManager.prototype.onChange = function (callback) {
        this.callbacks.push(callback);
    };
    ScreenManager.prototype.resize = function () {
        var topBar = document.getElementById('nav-bar');
        this.topOffset = topBar ? topBar.offsetHeight : 52;
        this.callbacks.forEach(function (callback) { return callback(); });
    };
    ScreenManager.prototype.getTopOffset = function () {
        return this.topOffset;
    };
    ScreenManager.prototype.getCanvasScale = function () {
        return this.scale;
    };
    return ScreenManager;
}());
export default new ScreenManager();
//# sourceMappingURL=screenManager.js.map