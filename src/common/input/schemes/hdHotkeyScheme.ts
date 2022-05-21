import {HotkeyScheme} from "../../../types";
import Hotkey from "../Hotkey";

const hdHotkeyScheme: HotkeyScheme = {
    [Hotkey.LineFormation]: 90,
    [Hotkey.SpreadFormation]: 67,
    [Hotkey.SplitFormation]: 86,

    [Hotkey.Patrol]: 81,
    [Hotkey.AttackGround]: 82,

    [Hotkey.Stop]: 70,
    [Hotkey.DeleteUnit]: 8,

    [Hotkey.CameraUp]: 87,
    [Hotkey.CameraDown]: 83,
    [Hotkey.CameraLeft]: 65,
    [Hotkey.CameraRight]: 68,
};

export default hdHotkeyScheme;
