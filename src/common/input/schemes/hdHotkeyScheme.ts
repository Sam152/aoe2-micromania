import { HotkeyScheme } from "../../../types.d.ts";
import Hotkey from "../Hotkey.ts";

const hdHotkeyScheme: HotkeyScheme = {
  [Hotkey.LineFormation]: "KeyZ",
  [Hotkey.SpreadFormation]: "KeyC",
  [Hotkey.SplitFormation]: "KeyV",

  [Hotkey.Patrol]: "KeyQ",
  [Hotkey.AttackGround]: "KeyR",

  [Hotkey.Stop]: "KeyF",
  [Hotkey.DeleteUnit]: "Delete",

  [Hotkey.CameraUp]: "ArrowUp",
  [Hotkey.CameraDown]: "ArrowDown",
  [Hotkey.CameraLeft]: "ArrowLeft",
  [Hotkey.CameraRight]: "ArrowRight",
};

export default hdHotkeyScheme;
