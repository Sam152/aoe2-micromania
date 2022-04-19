class ScreenManager {
    private scale: number;

    constructor() {
        this.scale = Math.min(1.5, window.devicePixelRatio);
    }

    getCanvasScale() {
        return this.scale;
    }
}

export default new ScreenManager();
