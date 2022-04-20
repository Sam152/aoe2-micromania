import InputManager from '../../input/InputManager';
import {clientStateTransmitter} from '../clientState';
import CanvasRenderer from '../../drawing/CanvasRenderer';
import {StateManagerInterface} from '../../../types';
import Grid from '../../terrain/Grid';

export default class RenderLoopManager {
    private stateManager: StateManagerInterface;
    private renderer: CanvasRenderer;
    private inputManager: InputManager;

    constructor(stateManager: StateManagerInterface, canvas: HTMLCanvasElement) {
        this.stateManager = stateManager;
        this.renderer = new CanvasRenderer(canvas);
        this.inputManager = new InputManager(canvas, stateManager, clientStateTransmitter);
    }

    start() {
        this.renderer.bootUp().then(() => {
            this.stateManager.dispatchClient({
                name: 'FIXATE_CAMERA',
                location: (new Grid(this.stateManager.getGameState().mapSize)).middleOfGrid().sub(this.renderer.getSize().divideScalar(2)),
            });
            this.render();
        });
    }

    render() {
        // Dispatch client state to indicate a frame is being rendered.
        this.stateManager.dispatchClient({name: 'FRAME_RENDERING_STARTED'});

        // Render the frame on the canvas and then dispatch input commands. Input must be dispatched after
        // rendering, since the renderer collects and dispatches events for assets being drawn on the canvas.
        this.renderer.render(this.stateManager.getGameState(), this.stateManager.getClientState(), this.stateManager.dispatchClient.bind(this.stateManager));
        this.inputManager.dispatchInput(this.stateManager.getClientState().camera);
        this.inputManager.clearInput();

        window.requestAnimationFrame(this.render.bind(this));
    }
}
