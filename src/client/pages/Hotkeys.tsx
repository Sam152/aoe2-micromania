import React, { useState } from "react";
import Section from "../components/Section.tsx";
import keycodeToHumanReadable from "../../common/util/keycodeToHumanReadable.ts";
import hotkeyManager from "../../common/input/HotkeyManager.ts";
import Hotkey from "../../common/input/Hotkey.ts";
import BindableRow from "../components/BindableRow.tsx";
import { HotkeyScheme } from "../../types.d.ts";
import hdHotkeyScheme from "../../common/input/schemes/hdHotkeyScheme.ts";
import deHotkeyScheme from "../../common/input/schemes/deHotkeyScheme.ts";
import aocHotkeyScheme from "../../common/input/schemes/aocHotkeyScheme.ts";

export default function Hotkeys() {
  const [, setCount] = useState(0);
  const rerender = () => setCount((c) => c + 1);

  function setBind(hotkey: Hotkey, code: number) {
    hotkeyManager.setBindFor(hotkey, code);
    rerender();
  }

  function clear() {
    hotkeyManager.clearStorage();
    rerender();
  }

  function setScheme(scheme: HotkeyScheme) {
    hotkeyManager.setScheme(scheme);
    rerender();
  }

  return (
    <div className="container">
      <div className="vstack">
        <div className="btn-group btn-group-right">
          <button className="btn" onClick={() => setScheme(hdHotkeyScheme)}>
            HD Hotkeys
          </button>
          <button className="btn" onClick={() => setScheme(deHotkeyScheme)}>
            DE Hotkeys
          </button>
          <button className="btn" onClick={() => setScheme(aocHotkeyScheme)}>
            Classic Hotkeys
          </button>
          <button className="btn btn-outline" onClick={clear}>
            Reset to default
          </button>
        </div>

        <Section>
          <div className="table-wrap">
            <table className="fixed">
              <thead>
                <tr>
                  <th>Hotkey name</th>
                  <th>Bind</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3}>
                    <h3 className="heading-md">Movement</h3>
                  </td>
                </tr>
                <tr>
                  <td>Select units</td>
                  <td>
                    <kbd>left click</kbd> / <kbd>left click</kbd> + <kbd>drag</kbd>
                  </td>
                  <td className="text-right" />
                </tr>
                <tr>
                  <td>Move unit(s)</td>
                  <td>
                    <kbd>right click</kbd>
                  </td>
                  <td className="text-right" />
                </tr>
                <tr>
                  <td>Add waypoint</td>
                  <td>
                    <kbd>shift</kbd> + <kbd>right click</kbd>
                  </td>
                  <td className="text-right" />
                </tr>

                <tr>
                  <td colSpan={3}>
                    <h3 className="heading-md">Combat</h3>
                  </td>
                </tr>
                <BindableRow label="Patrol units" hotkey={Hotkey.Patrol} setBind={setBind} />
                <BindableRow label="Stop units" hotkey={Hotkey.Stop} setBind={setBind} />
                <BindableRow label="Attack ground" hotkey={Hotkey.AttackGround} setBind={setBind} />

                <tr>
                  <td colSpan={3}>
                    <h3 className="heading-md">Formations</h3>
                  </td>
                </tr>
                <BindableRow label="Line formation" hotkey={Hotkey.LineFormation} setBind={setBind} />
                <BindableRow label="Spread formation" hotkey={Hotkey.SpreadFormation} setBind={setBind} />
                <BindableRow label="Split formation" hotkey={Hotkey.SplitFormation} setBind={setBind} />

                <tr>
                  <td colSpan={3}>
                    <h3 className="heading-md">Control Groups</h3>
                  </td>
                </tr>
                <tr>
                  <td>Assign control group</td>
                  <td>
                    <kbd>ctrl</kbd> + <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> /{" "}
                    <kbd>6</kbd> / <kbd>7</kbd> / <kbd>8</kbd> / <kbd>9</kbd> / <kbd>0</kbd>
                  </td>
                  <td className="text-right" />
                </tr>
                <tr>
                  <td>Select control group</td>
                  <td>
                    <kbd>1</kbd> / <kbd>2</kbd> / <kbd>3</kbd> / <kbd>4</kbd> / <kbd>5</kbd> / <kbd>6</kbd> /{" "}
                    <kbd>7</kbd> / <kbd>8</kbd> / <kbd>9</kbd> / <kbd>0</kbd>
                  </td>
                  <td className="text-right" />
                </tr>

                <tr>
                  <td colSpan={3}>
                    <h3 className="heading-md">Other</h3>
                  </td>
                </tr>
                <BindableRow label="Delete unit" hotkey={Hotkey.DeleteUnit} setBind={setBind} />
                <tr>
                  <td>Delete selected units</td>
                  <td>
                    <kbd>shift</kbd> +{" "}
                    <kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</kbd>
                  </td>
                  <td />
                </tr>
                <BindableRow label="Pan up" hotkey={Hotkey.CameraUp} setBind={setBind} />
                <BindableRow label="Pan down" hotkey={Hotkey.CameraDown} setBind={setBind} />
                <BindableRow label="Pan left" hotkey={Hotkey.CameraLeft} setBind={setBind} />
                <BindableRow label="Pan right" hotkey={Hotkey.CameraRight} setBind={setBind} />
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  );
}
