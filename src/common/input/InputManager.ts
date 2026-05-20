import { ClientStateAction, StateManagerInterface, StateTransmitter } from "../../types.d.ts";
import { gamePositionToScreenPosition, screenPositionToGamePosition } from "../util/screenPositionToGamePosition.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { FormationType } from "../units/formations/FormationType.ts";
import { hotkeyManager } from "./HotkeyManager.ts";
import { Hotkey } from "./Hotkey.ts";
import { ActiveCommand } from "./ActiveCommand.ts";

const doubleClickDuration = 250;
const digit0KeyCode = 48;
const controlGroups = Array.from({ length: 10 }, (_, i) => digit0KeyCode + i);

export class InputManager {
  private element: HTMLCanvasElement;
  private dragging: boolean;
  stateManager: StateManagerInterface;
  private clientStateTransmitter: StateTransmitter;
  private lastLeftClick: number;
  private heldKeys: Set<number>;
  private leftMouseDown: boolean;
  private shiftDown: boolean;
  private ctrlDown: boolean;

  private onPointerLockChange: () => void;
  private onMouseMove: (e: MouseEvent) => void;
  private onMouseDown: (e: MouseEvent) => void;
  private onMouseUp: (e: MouseEvent) => void;
  private onKeyDown: (e: KeyboardEvent) => void;
  private onKeyUp: (e: KeyboardEvent) => void;
  private onClick: (e: MouseEvent) => void;
  private onContextMenu: (e: MouseEvent) => void;

  constructor(
    element: HTMLCanvasElement,
    stateManager: StateManagerInterface,
    clientStateTransmitter: StateTransmitter,
  ) {
    this.element = element;
    this.dragging = false;
    this.lastLeftClick = 0;
    this.heldKeys = new Set();
    this.leftMouseDown = false;
    this.shiftDown = false;
    this.ctrlDown = false;

    this.stateManager = stateManager;
    this.clientStateTransmitter = clientStateTransmitter;

    this.onPointerLockChange = () => {
      this.dispatch({ n: "CURSOR_LOCK_CHANGED", locked: document.pointerLockElement === element });
    };

    this.onMouseMove = (e) => {
      const clientState = this.stateManager.getClientState();
      const position = clientState.cursorLocked
        ? clientState.mousePosition.clone().add({ x: e.movementX, y: e.movementY })
        : screenPositionToGamePosition(
          new Vector2(e.offsetX, e.offsetY).add(gamePositionToScreenPosition(clientState.camera)),
        );
      this.dispatch({ n: "MOUSE_POSITIONED", position });

      if (this.leftMouseDown) {
        if (!this.dragging) {
          this.dispatch({ n: "DRAG_START", position });
        }
        this.dispatch({ n: "DRAGGING", shift: this.shiftDown, position });
        this.dragging = true;
      }
    };

    this.onMouseDown = (e) => {
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
      if (e.button === 0) {
        this.leftMouseDown = true;
      }
    };

    this.onMouseUp = (e) => {
      const position = this.stateManager.getClientState().mousePosition;

      if (e.button === 0) {
        this.leftMouseDown = false;
        if (this.dragging) {
          this.dispatch({ n: "DRAG_END", position });
        } else {
          const time = new Date().getTime();
          this.dispatch({
            n: time - this.lastLeftClick < doubleClickDuration ? "DOUBLE_CLICK" : "LEFT_CLICK",
            position,
            shift: e.shiftKey,
          });
          this.lastLeftClick = time;
        }
        this.dragging = false;
      }

      if (e.button === 2 && !this.dragging) {
        this.dispatch({
          n: e.shiftKey ? "SHIFT_RIGHT_CLICK" : "RIGHT_CLICK",
          position,
        });
      }

      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
    };

    this.onKeyDown = (e) => {
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
      this.heldKeys.add(e.keyCode);

      if (e.repeat) { return; }

      const k = e.keyCode;

      if (k === hotkeyManager.getBindFor(Hotkey.Stop)) {
        this.dispatch({ n: "HOTKEY_STOP" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.DeleteUnit)) {
        this.dispatch({ n: e.shiftKey ? "HOTKEY_SHIFT_DELETE" : "HOTKEY_DELETE" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.AttackGround)) {
        const { activeCommand } = this.stateManager.getClientState();
        this.dispatch({ n: activeCommand === ActiveCommand.AttackGround ? "HOTKEY_CANCEL" : "HOTKEY_ATTACK_GROUND" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.Patrol)) {
        const { activeCommand, mousePosition } = this.stateManager.getClientState();
        this.dispatch(
          activeCommand === ActiveCommand.Patrol
            ? { n: "HOTKEY_CANCEL" }
            : { n: "HOTKEY_PATROL", position: mousePosition },
        );
      }
      if (k === hotkeyManager.getBindFor(Hotkey.LineFormation)) {
        this.dispatch({ n: "HOTKEY_FORMATION_CHANGED", formation: FormationType.Line });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.SpreadFormation)) {
        this.dispatch({ n: "HOTKEY_FORMATION_CHANGED", formation: FormationType.Spread });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.SplitFormation)) {
        this.dispatch({ n: "HOTKEY_FORMATION_CHANGED", formation: FormationType.Split });
      }
      controlGroups.forEach((keycode) => {
        if (k === keycode) {
          this.dispatch({
            n: this.ctrlDown ? "CONTROL_GROUP_ASSIGNED" : "CONTROL_GROUP_SELECTED",
            group: keycode - digit0KeyCode,
          });
        }
      });
    };

    this.onKeyUp = (e) => {
      this.heldKeys.delete(e.keyCode);
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
    };

    this.onContextMenu = (e) => e.preventDefault();

    this.onClick = (e) => {
      const camera = this.stateManager.getClientState().camera;
      if (!this.stateManager.getClientState().cursorLocked) {
        this.dispatch({
          n: "MOUSE_POSITIONED",
          position: screenPositionToGamePosition(
            new Vector2(e.offsetX, e.offsetY).add(gamePositionToScreenPosition(camera)),
          ),
        });
        element.requestPointerLock();
      }
    };

    document.addEventListener("pointerlockchange", this.onPointerLockChange);
    document.addEventListener("contextmenu", this.onContextMenu);
    element.addEventListener("mousemove", this.onMouseMove);
    element.addEventListener("mousedown", this.onMouseDown);
    element.addEventListener("mouseup", this.onMouseUp);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    element.addEventListener("click", this.onClick);
  }

  dispatchInput(): void {
    if (this.heldKeys.has(hotkeyManager.getBindFor(Hotkey.CameraLeft))) {
      this.dispatch({ n: "ARROW_LEFT" });
    }
    if (this.heldKeys.has(hotkeyManager.getBindFor(Hotkey.CameraRight))) {
      this.dispatch({ n: "ARROW_RIGHT" });
    }
    if (this.heldKeys.has(hotkeyManager.getBindFor(Hotkey.CameraUp))) {
      this.dispatch({ n: "ARROW_UP" });
    }
    if (this.heldKeys.has(hotkeyManager.getBindFor(Hotkey.CameraDown))) {
      this.dispatch({ n: "ARROW_DOWN" });
    }
  }

  dispatch(action: ClientStateAction) {
    this.stateManager.dispatchClient(action);
    this.clientStateTransmitter(
      this.stateManager.getClientState(),
      this.stateManager.getGameState(),
      action,
      this.stateManager.dispatchGame.bind(this.stateManager),
    );
  }

  cleanUp(): void {
    document.removeEventListener("pointerlockchange", this.onPointerLockChange);
    document.removeEventListener("contextmenu", this.onContextMenu);
    this.element.removeEventListener("mousemove", this.onMouseMove);
    this.element.removeEventListener("mousedown", this.onMouseDown);
    this.element.removeEventListener("mouseup", this.onMouseUp);
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
    this.element.removeEventListener("click", this.onClick);
  }
}
