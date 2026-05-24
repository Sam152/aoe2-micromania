export type ScreenManagerChangeEvent = {
  canvasHeight: number;
  canvasWidth: number;
  scale: number;
};

type Subscriber = (e: ScreenManagerChangeEvent) => void;

class ScreenManager {
  private scale: number;
  private topOffset: number;
  callbacks: Subscriber[];

  constructor() {
    this.scale = Math.min(1.3, globalThis.devicePixelRatio);
    this.callbacks = [];

    globalThis.addEventListener("resize", this.resize.bind(this));

    this.topOffset = 0;
    this.resize();
  }

  onChange(callback: Subscriber) {
    this.callbacks.push(callback);
    this.resize();
  }

  removeOnChange(callback: Subscriber) {
    console.log(this.callbacks.length);
    this.callbacks = this.callbacks.filter((listCallback) => listCallback !== callback);
    console.log(this.callbacks.length);
  }

  resize() {
    const topBar = document.getElementById("nav-bar");
    this.topOffset = topBar ? topBar.offsetHeight : 52;

    const e: ScreenManagerChangeEvent = {
      canvasWidth: globalThis.innerWidth * this.scale,
      canvasHeight: (globalThis.innerHeight - this.topOffset) *
        this.scale,
      scale: this.scale,
    };
    this.callbacks.forEach((callback) => callback(e));
  }

  getTopOffset(): number {
    return this.topOffset;
  }

  getCanvasScale() {
    return this.scale;
  }
}

export const screenManager = new ScreenManager();
