// https://github.com/RonenNess/stinput

import {ClientState, ClientStateAction, GameDispatcher, StateManagerInterface} from "../../types";
import screenPositionToGamePosition from "../util/screenPositionToGamePosition";

const StInput = require('stinput');

export default class InputManager {
    input: typeof StInput;
    private dragging: boolean;
    stateManager: StateManagerInterface;
    private clientStateTransmitter: (clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher) => void;

    constructor(element: HTMLCanvasElement, stateManager: StateManagerInterface, clientStateTransmitter: (clientState: ClientState, action: ClientStateAction, gameDispatcher: GameDispatcher) => void) {
        this.input = new StInput();
        this.input.disableContextMenu = true;
        this.dragging = false;

        this.stateManager = stateManager;
        this.clientStateTransmitter = clientStateTransmitter;
    }

    dispatchInput(): void {
        if (this.input.released('mouse_left') && !this.dragging) {
            this.dispatch({
                name: "LEFT_CLICK",
                position: screenPositionToGamePosition(this.input.mousePosition),
            });
        }
        if (this.input.released('mouse_right') && !this.dragging) {
            this.dispatch({
                name: "RIGHT_CLICK",
                position: screenPositionToGamePosition(this.input.mousePosition),
            });
        }

        if (this.input.mouseMoving && this.input.mouseDown(this.input.MouseButtons.left)) {
            if (!this.dragging) {
                this.dispatch({
                    name: "DRAG_START",
                    position: screenPositionToGamePosition(this.input.mousePosition),
                });
            }
            this.dispatch({
                name: "DRAGGING",
                position: screenPositionToGamePosition(this.input.mousePosition),
            });
            this.dragging = true;
        }

        if (this.input.released('mouse_left')) {
            if (this.dragging) {
                this.stateManager.dispatchClient({
                    name: "DRAG_END",
                    position: screenPositionToGamePosition(this.input.mousePosition),
                });
            }
            this.dragging = false;
        }
    }

    dispatch(action: ClientStateAction) {
        this.stateManager.dispatchClient(action);
        this.clientStateTransmitter(this.stateManager.getClientState(), action, this.stateManager.dispatchGame.bind(this.stateManager));
    }

    clearInput(): void {
        this.input.endFrame();
    }
}
