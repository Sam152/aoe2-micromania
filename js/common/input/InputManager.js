import screenPositionToGamePosition, { gamePositionToScreenPosition } from '../util/screenPositionToGamePosition';
import { Vector2 } from 'three/src/math/Vector2';
import FormationType from '../units/formations/FormationType';
import screenManager from '../drawing/screenManager';
import hotkeyManager from './HotkeyManager';
import Hotkey from './Hotkey';
var StInput = require('stinput');
var doubleClickDuration = 250;
var InputManager = (function () {
    function InputManager(element, stateManager, clientStateTransmitter) {
        this.input = new StInput();
        this.input.disableContextMenu = true;
        this.dragging = false;
        this.lastLeftClick = 0;
        this.stateManager = stateManager;
        this.clientStateTransmitter = clientStateTransmitter;
    }
    InputManager.prototype.dispatchInput = function (cameraPosition) {
        this.dispatch({
            n: 'MOUSE_POSITIONED',
            position: this.mousePosition(cameraPosition)
        });
        if (this.input.released('mouse_left') && !this.dragging) {
            var time = (new Date).getTime();
            this.dispatch({
                n: time - this.lastLeftClick < doubleClickDuration ? 'DOUBLE_CLICK' : 'LEFT_CLICK',
                position: this.mousePosition(cameraPosition)
            });
            this.lastLeftClick = time;
        }
        if (this.input.released('mouse_right') && !this.dragging) {
            this.dispatch({
                n: this.input.shiftDown ? 'SHIFT_RIGHT_CLICK' : 'RIGHT_CLICK',
                position: this.mousePosition(cameraPosition)
            });
        }
        if (this.input.mouseMoving && this.input.mouseDown(this.input.MouseButtons.left)) {
            if (!this.dragging) {
                this.dispatch({
                    n: 'DRAG_START',
                    position: this.mousePosition(cameraPosition)
                });
            }
            this.dispatch({
                n: 'DRAGGING',
                position: this.mousePosition(cameraPosition)
            });
            this.dragging = true;
        }
        if (this.input.released('mouse_left')) {
            if (this.dragging) {
                this.dispatch({
                    n: 'DRAG_END',
                    position: this.mousePosition(cameraPosition)
                });
            }
            this.dragging = false;
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.Stop))) {
            this.dispatch({
                n: 'HOTKEY_STOP'
            });
        }
        if (!this.input.shiftDown && this.input.keyPressed(StInput.KeyboardKeys.backspace)) {
            this.dispatch({
                n: 'HOTKEY_DELETE'
            });
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.AttackGround))) {
            this.dispatch({
                n: 'HOTKEY_ATTACK_GROUND'
            });
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.Patrol))) {
            this.dispatch({
                n: 'HOTKEY_PATROL',
                position: this.mousePosition(cameraPosition)
            });
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.LineFormation))) {
            this.dispatch({
                n: 'HOTKEY_FORMATION_CHANGED',
                formation: FormationType.Line
            });
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.SpreadFormation))) {
            this.dispatch({
                n: 'HOTKEY_FORMATION_CHANGED',
                formation: FormationType.Spread
            });
        }
        if (this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.SplitFormation))) {
            this.dispatch({
                n: 'HOTKEY_FORMATION_CHANGED',
                formation: FormationType.Split
            });
        }
        if (this.input.shiftDown && this.input.keyPressed(hotkeyManager.getBindFor(Hotkey.DeleteUnit))) {
            this.dispatch({
                n: 'HOTKEY_SHIFT_DELETE'
            });
        }
        if (this.input.keyPressed(StInput.KeyboardKeys.escape)) {
            this.dispatch({
                n: 'HOTKEY_CANCEL'
            });
        }
        if (this.input.keyDown(hotkeyManager.getBindFor(Hotkey.CameraLeft))) {
            this.dispatch({
                n: 'ARROW_LEFT'
            });
        }
        if (this.input.keyDown(hotkeyManager.getBindFor(Hotkey.CameraRight))) {
            this.dispatch({
                n: 'ARROW_RIGHT'
            });
        }
        if (this.input.keyDown(hotkeyManager.getBindFor(Hotkey.CameraUp))) {
            this.dispatch({
                n: 'ARROW_UP'
            });
        }
        if (this.input.keyDown(hotkeyManager.getBindFor(Hotkey.CameraDown))) {
            this.dispatch({
                n: 'ARROW_DOWN'
            });
        }
    };
    InputManager.prototype.mousePosition = function (cameraPosition) {
        return screenPositionToGamePosition((new Vector2(this.input.mousePosition.x, this.input.mousePosition.y - screenManager.getTopOffset())).add(gamePositionToScreenPosition(cameraPosition)));
    };
    InputManager.prototype.dispatch = function (action) {
        this.stateManager.dispatchClient(action);
        this.clientStateTransmitter(this.stateManager.getClientState(), action, this.stateManager.dispatchGame.bind(this.stateManager));
    };
    InputManager.prototype.clearInput = function () {
        this.input.endFrame();
    };
    InputManager.prototype.cleanUp = function () {
        this.input.dispose();
    };
    return InputManager;
}());
export default InputManager;
//# sourceMappingURL=InputManager.js.map