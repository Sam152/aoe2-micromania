import Hotkey from "./Hotkey";
import hdHotkeyScheme from "./schemes/hdHotkeyScheme";
import LocalStorageObject from "../util/LocalStorageObject";

const defaultScheme = hdHotkeyScheme;

class HotkeyManager {
    private storage: LocalStorageObject<{ [key in Hotkey]?: number }>;
    private binds: { [key in Hotkey]?: number };

    constructor() {
        this.storage = new LocalStorageObject<{ [key in Hotkey]: number }>('hotkeys');
        this.binds = this.storage.get({});
    }

    getBindFor(hotkey: Hotkey): number {
        return this.binds[hotkey] || defaultScheme[hotkey];
    }

    setBindFor(hotkey: Hotkey, bind: number): void {
        this.binds[hotkey] = bind;
        this.storage.set(this.binds);
    }
}

const hotkeyManager = new HotkeyManager();
export default hotkeyManager;
