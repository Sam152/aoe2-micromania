import {HotkeyScheme} from '../../../types';
import Hotkey from '../Hotkey';

const aocHotkeyScheme: HotkeyScheme = {
    [Hotkey.LineFormation]: 81,
    [Hotkey.SpreadFormation]: 69,
    [Hotkey.SplitFormation]: 70,

    [Hotkey.Patrol]: 90,
    [Hotkey.AttackGround]: 84,

    [Hotkey.Stop]: 83,
    [Hotkey.DeleteUnit]: 46,

    [Hotkey.CameraUp]: 38,
    [Hotkey.CameraDown]: 40,
    [Hotkey.CameraLeft]: 37,
    [Hotkey.CameraRight]: 39,
};

export default aocHotkeyScheme;
