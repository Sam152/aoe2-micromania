import InputManager from '../../input/InputManager';
import {clientStateTransmitter} from '../clientState';
import CanvasRenderer from '../../drawing/CanvasRenderer';
import {GameState, GameStateAction, StateManagerInterface} from '../../../types';
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
            if (this.stateManager.getClientState().playingAs) {
                this.stateManager.dispatchGame({
                    n: 'CLIENT_LOADED',
                    player: this.stateManager.getClientState().playingAs,
                });
            } else {
                this.stateManager.dispatchGame({
                    n: 'SPECTATOR_LOADED',
                });
            }

            this.fixateCamera(this.stateManager.getGameState().mapSize);
            this.render();
        });

        this.stateManager.addGameStateListener((state: GameState, action: GameStateAction) => {
            if (action.n === 'MAP_PARAMETERS_SET') {
                this.fixateCamera(state.mapSize);
            }
        })
    }

    fixateCamera(mapSize: number) {
        this.stateManager.dispatchClient({
            n: 'FIXATE_CAMERA',
            location: (new Grid(mapSize)).middleOfGrid().sub(this.renderer.getSize().divideScalar(2)),
        });
    }

    stop() {
        this.inputManager.cleanUp();
    }

    render() {
        // Dispatch client state to indicate a frame is being rendered.
        this.stateManager.dispatchClient({n: 'FRAME_RENDERING_STARTED'});

        // Render the frame on the canvas and then dispatch input commands. Input must be dispatched after
        // rendering, since the renderer collects and dispatches events for assets being drawn on the canvas.
        this.renderer.render(this.stateManager.getGameState(), this.stateManager.getClientState(), this.stateManager.dispatchClient.bind(this.stateManager));
        this.inputManager.dispatchInput(this.stateManager.getClientState().camera);
        this.inputManager.clearInput();

        window.requestAnimationFrame(this.render.bind(this));
    }
}
