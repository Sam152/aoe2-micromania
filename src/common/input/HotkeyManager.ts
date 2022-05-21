import Hotkey from "./Hotkey";
const StInput = require('stinput');

class HotkeyManager {

    getBindFor(hotkey: Hotkey): number {
        return 90;
    }

    setBindFor(hotkey: Hotkey, bind: number): void {

    }
}

const hotkeyManager = new HotkeyManager();
export default hotkeyManager;
