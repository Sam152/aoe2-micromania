import InputManager from '../../input/InputManager';
import {clientStateTransmitter} from '../clientState';
import CanvasRenderer from '../../drawing/CanvasRenderer';
import {ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface} from '../../../types';
import Grid from '../../terrain/Grid';
import soundPlayer from "../../sounds/SoundPlayer";

export default class RenderLoopManager {
    private stateManager: StateManagerInterface;
    private renderer: CanvasRenderer;
    private inputManager: InputManager;
    private running: boolean;

    constructor(stateManager: StateManagerInterface, canvas: HTMLCanvasElement) {
        this.stateManager = stateManager;
        this.renderer = new CanvasRenderer(canvas);
        this.inputManager = new InputManager(canvas, stateManager, clientStateTransmitter);
        this.running = false;
    }

    start() {
        this.running = true;
        this.stateManager.init();

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
            if (state.soundQueue.length > 0) {
                soundPlayer.playSounds(state.soundQueue);
            }
        });
        this.stateManager.addClientStateListener((state: ClientState, action: ClientStateAction) => {
            if (action.n === 'FRAME_RENDERING_STARTED') {
                if (state.soundQueue.length > 0) {
                    soundPlayer.playSounds(state.soundQueue);
                }
                state.soundQueue = [];
            }
        });
    }

    fixateCamera(mapSize: number) {
        this.stateManager.dispatchClient({
            n: 'FIXATE_CAMERA',
            location: (new Grid(mapSize)).middleOfGrid().sub(this.renderer.getSize().divideScalar(2)),
        });
    }

    stop() {
        this.running = false;
        this.inputManager.cleanUp();
        this.stateManager.cleanUp();
    }

    render() {
        this.inputManager.dispatchInput(this.stateManager.getClientState().camera);

        // Dispatch client state to indicate a frame is being rendered.
        this.stateManager.dispatchClient({n: 'FRAME_RENDERING_STARTED'});
        this.renderer.render(this.stateManager.getGameState(), this.stateManager.getClientState(), this.stateManager.dispatchClient.bind(this.stateManager));

        this.inputManager.clearInput();

        if (this.running) {
            window.requestAnimationFrame(this.render.bind(this));
        }
    }
}
