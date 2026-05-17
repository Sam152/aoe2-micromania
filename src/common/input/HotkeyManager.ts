import Hotkey from "./Hotkey.ts";
import hdHotkeyScheme from "./schemes/hdHotkeyScheme.ts";
import LocalStorageObject from "../util/LocalStorageObject.ts";
import { HotkeyScheme } from "../../types.d.ts";
import deepClone from "../util/deepClone.ts";

const defaultScheme = hdHotkeyScheme;

class HotkeyManager {
  private storage: LocalStorageObject<{ [key in Hotkey]?: string }>;
  private binds: { [key in Hotkey]?: string };

  constructor() {
    this.storage = new LocalStorageObject<{ [key in Hotkey]: string }>("hotkeys");
    this.binds = this.storage.get({});
  }

  getBindFor(hotkey: Hotkey): string {
    return this.binds[hotkey] || defaultScheme[hotkey];
  }

  setBindFor(hotkey: Hotkey, bind: string): void {
    this.binds[hotkey] = bind;
    this.storage.set(this.binds);
  }

  setScheme(scheme: HotkeyScheme): void {
    this.binds = deepClone(scheme);
    this.storage.set(this.binds);
  }

  clearStorage() {
    this.storage.set({});
    this.binds = {};
  }
}

const hotkeyManager = new HotkeyManager();
export default hotkeyManager;
