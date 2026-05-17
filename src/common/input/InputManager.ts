import { ClientStateAction, StateManagerInterface, StateTransmitter } from "../../types.d.ts";
import screenPositionToGamePosition, { gamePositionToScreenPosition } from "../util/screenPositionToGamePosition.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import FormationType from "../units/formations/FormationType.ts";
import screenManager from "../drawing/screenManager.ts";
import hotkeyManager from "./HotkeyManager.ts";
import Hotkey from "./Hotkey.ts";

const StInput = require("stinput");

const doubleClickDuration = 250;
const controlGroups = [
  StInput.KeyboardKeys.n0,
  StInput.KeyboardKeys.n1,
  StInput.KeyboardKeys.n2,
  StInput.KeyboardKeys.n3,
  StInput.KeyboardKeys.n4,
  StInput.KeyboardKeys.n5,
  StInput.KeyboardKeys.n6,
  StInput.KeyboardKeys.n7,
  StInput.KeyboardKeys.n8,
  StInput.KeyboardKeys.n9,
];

export default class InputManager {
  input: typeof StInput;
  private dragging: boolean;
  stateManager: StateManagerInterface;
  private clientStateTransmitter: StateTransmitter;
  private lastLeftClick: number;
  private heldKeys: Set<number>;
  private leftMouseDown: boolean;
  private shiftDown: boolean;
  private ctrlDown: boolean;

  constructor(
    element: HTMLCanvasElement,
    stateManager: StateManagerInterface,
    clientStateTransmitter: StateTransmitter,
  ) {
    this.input = new StInput(element);
    this.input.disableContextMenu = true;
    this.dragging = false;
    this.lastLeftClick = 0;
    this.heldKeys = new Set();
    this.leftMouseDown = false;
    this.shiftDown = false;
    this.ctrlDown = false;

    this.stateManager = stateManager;
    this.clientStateTransmitter = clientStateTransmitter;

    document.addEventListener('pointerlockchange', () => {
      this.dispatch({ n: "CURSOR_LOCK_CHANGED", locked: document.pointerLockElement === element });
    });

    element.addEventListener('mousemove', (e) => {
      const clientState = this.stateManager.getClientState();

      const position = clientState.cursorLocked ? clientState.mousePosition.clone().add({
        x: e.movementX,
        y: e.movementY,
      }) : screenPositionToGamePosition(
          new Vector2(e.offsetX, e.offsetY).add(
              gamePositionToScreenPosition(clientState.camera),
          ),
      );
      this.dispatch({ n: "MOUSE_POSITIONED", position });

      if (this.leftMouseDown) {
        if (!this.dragging) {
          this.dispatch({ n: "DRAG_START", position });
        }
        this.dispatch({ n: "DRAGGING", shift: this.shiftDown, position });
        this.dragging = true;
      }
    });

    element.addEventListener('mousedown', (e) => {
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
      if (e.button === 0) {
        this.leftMouseDown = true;
      }
    });

    element.addEventListener('mouseup', (e) => {
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
    });

    document.addEventListener('keydown', (e) => {
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
      this.heldKeys.add(e.keyCode);

      if (e.repeat) return;

      const k = e.keyCode;

      if (k === hotkeyManager.getBindFor(Hotkey.Stop)) {
        this.dispatch({ n: "HOTKEY_STOP" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.DeleteUnit)) {
        this.dispatch({ n: e.shiftKey ? "HOTKEY_SHIFT_DELETE" : "HOTKEY_DELETE" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.AttackGround)) {
        this.dispatch({ n: "HOTKEY_ATTACK_GROUND" });
      }
      if (k === hotkeyManager.getBindFor(Hotkey.Patrol)) {
        this.dispatch({ n: "HOTKEY_PATROL", position: this.stateManager.getClientState().mousePosition });
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
      if (k === StInput.KeyboardKeys.escape) {
        this.dispatch({ n: "HOTKEY_CANCEL" });
      }

      controlGroups.forEach((keycode) => {
        if (k === keycode) {
          this.dispatch({
            n: this.ctrlDown ? "CONTROL_GROUP_ASSIGNED" : "CONTROL_GROUP_SELECTED",
            group: keycode - StInput.KeyboardKeys.n0,
          });
        }
      });
    });

    document.addEventListener('keyup', (e) => {
      this.heldKeys.delete(e.keyCode);
      this.shiftDown = e.shiftKey;
      this.ctrlDown = e.ctrlKey;
    });

    element.addEventListener('click', (e) => {
      const camera = this.stateManager.getClientState().camera;
      if (!this.stateManager.getClientState().cursorLocked) {
        this.dispatch({
          n: "MOUSE_POSITIONED",
          position: screenPositionToGamePosition(
            new Vector2(e.offsetX, e.offsetY).add(
              gamePositionToScreenPosition(camera),
            ),
          ),
        });
        element.requestPointerLock();
      }
    });
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

  mousePosition(cameraPosition: Vector2) {
    return screenPositionToGamePosition(
      new Vector2(this.input.mousePosition.x, this.input.mousePosition.y - screenManager.getTopOffset()).add(
        gamePositionToScreenPosition(cameraPosition),
      ),
    );
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

  clearInput(): void {
    this.input.endFrame();
  }

  cleanUp() {
    this.input.dispose();
  }
}
