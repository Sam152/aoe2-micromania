import keycodeToHumanReadable from "../../common/util/keycodeToHumanReadable";
import hotkeyManager from "../../common/input/HotkeyManager";
import Hotkey from "../../common/input/Hotkey";
import BindSelection from "./BindSelection";

export default function BindableRow({
  setBind,
  label,
  hotkey,
}: {
  setBind: (hotkey: Hotkey, code: number) => void;
  label: string;
  hotkey: number;
}) {
  return (
    <tr>
      <td>{label}</td>
      <td>
        <kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(hotkey))}</kbd>
      </td>
      <td className="text-right">
        <BindSelection onChange={(keycode) => setBind(hotkey, keycode)} />
      </td>
    </tr>
  );
}
