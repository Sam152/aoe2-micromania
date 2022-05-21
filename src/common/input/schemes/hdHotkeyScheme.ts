import {HotkeyScheme} from '../../../types';
import Hotkey from '../Hotkey';

const hdHotkeyScheme: HotkeyScheme = {
    [Hotkey.LineFormation]: 90,
    [Hotkey.SpreadFormation]: 67,
    [Hotkey.SplitFormation]: 86,

    [Hotkey.Patrol]: 81,
    [Hotkey.AttackGround]: 82,

    [Hotkey.Stop]: 70,
    [Hotkey.DeleteUnit]: 46,

    [Hotkey.CameraUp]: 38,
    [Hotkey.CameraDown]: 40,
    [Hotkey.CameraLeft]: 37,
    [Hotkey.CameraRight]: 39,
};

export default hdHotkeyScheme;
