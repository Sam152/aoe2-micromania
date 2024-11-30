class ScreenManager {
  private scale: number;
  private topOffset: number;
  callbacks: Function[];

  constructor() {
    this.scale = Math.min(1.5, window.devicePixelRatio);
    this.callbacks = [];

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  onChange(callback: Function) {
    this.callbacks.push(callback);
  }

  resize() {
    const topBar = document.getElementById("nav-bar");
    this.topOffset = topBar ? topBar.offsetHeight : 52;

    this.callbacks.forEach((callback) => callback());
  }

  getTopOffset(): number {
    return this.topOffset;
  }

  getCanvasScale() {
    return this.scale;
  }
}

export default new ScreenManager();
