import hdHotkeyScheme from './schemes/hdHotkeyScheme';
import LocalStorageObject from '../util/LocalStorageObject';
import deepClone from '../util/deepClone';
var defaultScheme = hdHotkeyScheme;
var HotkeyManager = (function () {
    function HotkeyManager() {
        this.storage = new LocalStorageObject('hotkeys');
        this.binds = this.storage.get({});
    }
    HotkeyManager.prototype.getBindFor = function (hotkey) {
        return this.binds[hotkey] || defaultScheme[hotkey];
    };
    HotkeyManager.prototype.setBindFor = function (hotkey, bind) {
        this.binds[hotkey] = bind;
        this.storage.set(this.binds);
    };
    HotkeyManager.prototype.setScheme = function (scheme) {
        this.binds = deepClone(scheme);
        this.storage.set(this.binds);
    };
    HotkeyManager.prototype.clearStorage = function () {
        this.storage.set({});
        this.binds = {};
    };
    return HotkeyManager;
}());
var hotkeyManager = new HotkeyManager();
export default hotkeyManager;
//# sourceMappingURL=HotkeyManager.js.map