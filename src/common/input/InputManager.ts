import {
    ClientStateAction,
    StateManagerInterface,
    StateTransmitter,
} from '../../types';
import screenPositionToGamePosition, {gamePositionToScreenPosition} from '../util/screenPositionToGamePosition';
import {Vector2} from 'three/src/math/Vector2';

const StInput = require('stinput');

const doubleClickDuration = 250;

export default class InputManager {
    input: typeof StInput;
    private dragging: boolean;
    stateManager: StateManagerInterface;
    private clientStateTransmitter: StateTransmitter;
    private lastLeftClick: number;

    constructor(element: HTMLCanvasElement, stateManager: StateManagerInterface, clientStateTransmitter: StateTransmitter) {
        this.input = new StInput();
        this.input.disableContextMenu = true;
        this.dragging = false;
        this.lastLeftClick = 0;

        this.stateManager = stateManager;
        this.clientStateTransmitter = clientStateTransmitter;
    }

    dispatchInput(cameraPosition: Vector2): void {
        this.dispatch({
            name: 'MOUSE_POSITIONED',
            position: this.mousePosition(cameraPosition),
        });

        if (this.input.released('mouse_left') && !this.dragging) {
            const time = (new Date).getTime();
            this.dispatch({
                name: time - this.lastLeftClick < doubleClickDuration ? 'DOUBLE_CLICK' : 'LEFT_CLICK',
                position: this.mousePosition(cameraPosition),
            });
            this.lastLeftClick = time;
        }
        if (this.input.released('mouse_right') && !this.dragging) {
            this.dispatch({
                name: this.input.shiftDown ? 'SHIFT_RIGHT_CLICK' : 'RIGHT_CLICK',
                position: this.mousePosition(cameraPosition),
            });
        }

        if (this.input.mouseMoving && this.input.mouseDown(this.input.MouseButtons.left)) {
            if (!this.dragging) {
                this.dispatch({
                    name: 'DRAG_START',
                    position: this.mousePosition(cameraPosition),
                });
            }
            this.dispatch({
                name: 'DRAGGING',
                position: this.mousePosition(cameraPosition),
            });
            this.dragging = true;
        }

        if (this.input.released('mouse_left')) {
            if (this.dragging) {
                this.dispatch({
                    name: 'DRAG_END',
                    position: this.mousePosition(cameraPosition),
                });
            }
            this.dragging = false;
        }

        if (this.input.pressed('f')) {
            this.dispatch({
                name: 'HOTKEY_STOP',
            });
        }
        if (!this.input.shiftDown && this.input.keyPressed(StInput.KeyboardKeys.backspace)) {
            this.dispatch({
                name: 'HOTKEY_DELETE',
            });
        }
        if (this.input.pressed('r')) {
            this.dispatch({
                name: 'HOTKEY_ATTACK_GROUND',
            });
        }
        if (this.input.pressed('q')) {
            this.dispatch({
                name: 'HOTKEY_PATROL',
                position: this.mousePosition(cameraPosition),
            });
        }
        if (this.input.shiftDown && this.input.keyPressed(StInput.KeyboardKeys.backspace)) {
            this.dispatch({
                name: 'HOTKEY_SHIFT_DELETE',
            });
        }

        if (this.input.keyPressed(StInput.KeyboardKeys.escape)) {
            this.dispatch({
                name: 'HOTKEY_CANCEL',
            });
        }

        if (this.input.down('left_arrow') || this.input.down('a')) {
            this.dispatch({
                name: 'ARROW_LEFT',
            });
        }
        if (this.input.down('right_arrow') || this.input.down('d')) {
            this.dispatch({
                name: 'ARROW_RIGHT',
            });
        }
        if (this.input.down('up_arrow') || this.input.down('w')) {
            this.dispatch({
                name: 'ARROW_UP',
            });
        }
        if (this.input.down('down_arrow') || this.input.down('s')) {
            this.dispatch({
                name: 'ARROW_DOWN',
            });
        }
    }

    mousePosition(cameraPosition: Vector2) {
        return screenPositionToGamePosition(
            (new Vector2(this.input.mousePosition.x, this.input.mousePosition.y)).add(gamePositionToScreenPosition(cameraPosition)),
        );
    }

    dispatch(action: ClientStateAction) {
        this.stateManager.dispatchClient(action);
        this.clientStateTransmitter(this.stateManager.getClientState(), action, this.stateManager.dispatchGame.bind(this.stateManager));
    }

    clearInput(): void {
        this.input.endFrame();
    }
}
