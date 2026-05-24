class ScreenManager {
  private scale: number;
  private topOffset: number;
  callbacks: (() => void)[];

  constructor() {
    this.scale = Math.min(1.3, globalThis.devicePixelRatio);
    this.callbacks = [];

    globalThis.addEventListener("resize", this.resize.bind(this));

    this.topOffset = 0;
    this.resize();
  }

  onChange(callback: () => void) {
    this.callbacks.push(callback);
  }

  removeOnChange(callback: () => void) {
    console.log(this.callbacks.length);
    this.callbacks = this.callbacks.filter((listCallback) => listCallback !== callback);
    console.log(this.callbacks.length);
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

export const screenManager = new ScreenManager();
