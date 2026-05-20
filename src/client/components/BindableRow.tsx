import { keycodeToHumanReadable } from "../../common/util/keycodeToHumanReadable.ts";
import { hotkeyManager } from "../../common/input/HotkeyManager.ts";
import { Hotkey } from "../../common/input/Hotkey.ts";
import { BindSelection } from "./BindSelection.tsx";

export function BindableRow({
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
