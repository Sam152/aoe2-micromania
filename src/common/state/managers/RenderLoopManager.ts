import { InputManager } from "../../input/InputManager.ts";
import { clientStateTransmitter } from "../clientState.ts";
import { CanvasRenderer } from "../../drawing/CanvasRenderer.ts";
import { ClientState, ClientStateAction, GameState, GameStateAction, StateManagerInterface } from "../../../types.ts";
import { Grid } from "../../terrain/Grid.ts";
import { soundPlayer } from "../../sounds/SoundPlayer.ts";
import { averageVector } from "../../util/averageVector.ts";
import { screenManager } from "../../drawing/screenManager.ts";

export class RenderLoopManager {
  private stateManager: StateManagerInterface;
  private renderer: CanvasRenderer;
  private inputManager: InputManager;
  private running: boolean;

  constructor(stateManager: StateManagerInterface, canvas: HTMLCanvasElement) {
    this.stateManager = stateManager;
    this.renderer = new CanvasRenderer(canvas);
    this.inputManager = new InputManager(canvas, stateManager, clientStateTransmitter);
    this.running = false;

    this.onResize = this.onResize.bind(this);
  }

  start(startAs: "CLIENT" | "SPECTATOR") {
    this.running = true;
    this.stateManager.init();

    screenManager.onChange(this.onResize);

    this.renderer.context.font = "bold 125px Georgia";
    this.renderer.context.strokeStyle = "#ffd568";
    const half = this.renderer.getSize().divideScalar(2);
    this.renderer.context.strokeText(`Loading...`, half.x + 3 - 310, half.y + 3);

    this.renderer.bootUp().then(() => {
      this.stateManager.dispatchGame({
        n: startAs === "CLIENT" ? "CLIENT_LOADED" : "SPECTATE_CLIENT_LOADED",
      });
      this.fixateCameraOnMiddleOfMap(this.stateManager.getGameState().mapSize);

      this.render();
    });

    this.stateManager.addGameStateListener((state: GameState, action: GameStateAction) => {
      if (state.soundQueue.length > 0) {
        soundPlayer.playSounds(state.soundQueue);
      }

      // Fixate on a logical part of the map, when significant actions occur.
      const clientId = this.stateManager.getClientState().clientId;
      if (action.n === "CLIENT_LOADED_WITH_ID" && action.playerId === clientId) {
        if (state.activePlayers[clientId]) {
          this.fixateCameraOnPlayerUnits(state, state.activePlayers[clientId]);
        } else {
          this.fixateCameraOnMiddleOfMap(state.mapSize);
        }
      }
    });
    this.stateManager.addClientStateListener((state: ClientState, action: ClientStateAction) => {
      if (action.n === "FRAME_RENDERING_STARTED") {
        if (state.soundQueue.length > 0) {
          soundPlayer.playSounds(state.soundQueue);
        }
        state.soundQueue = [];
      }
    });
  }

  onResize() {
    // @TODO - Integrate screen size, so nudging works.
    console.log(this.stateManager);
    // this.stateManager.dispatchClient({
    //   n: "FIXATE_CAMERA",
    //   location: startingCamera.sub(this.renderer.getSize().divideScalar(2)),
    // });
  }

  fixateCameraOnPlayerUnits(state: GameState, player: number) {
    const unitsVector = averageVector(
      state.units.filter((unit) => unit.ownedByPlayer === player).map((unit) => unit.position),
    );
    const middleOfGrid = new Grid(state.mapSize).middleOfGrid();
    const towardsMiddle = middleOfGrid.sub(unitsVector);

    // The amount "towards the middle" we should nudge the camera.
    const startingCamera = unitsVector.add(towardsMiddle.multiplyScalar(0.5));

    this.stateManager.dispatchClient({
      n: "FIXATE_CAMERA",
      location: startingCamera.sub(this.renderer.getSize().divideScalar(2)),
    });
  }

  fixateCameraOnMiddleOfMap(mapSize: number) {
    this.stateManager.dispatchClient({
      n: "FIXATE_CAMERA",
      location: new Grid(mapSize).middleOfGrid().sub(this.renderer.getSize().divideScalar(2)),
    });
  }

  stop() {
    this.running = false;
    screenManager.removeOnChange(this.onResize);
    this.inputManager.cleanUp();
    this.stateManager.cleanUp();
    this.renderer.cleanUp();
  }

  render() {
    this.inputManager.dispatchInput();

    // Dispatch client state to indicate a frame is being rendered.
    this.stateManager.dispatchClient({ n: "FRAME_RENDERING_STARTED" });
    this.renderer.render(
      this.stateManager.getGameState(),
      this.stateManager.getClientState(),
      this.stateManager.dispatchClient.bind(this.stateManager),
    );

    if (this.running) {
      globalThis.requestAnimationFrame(this.render.bind(this));
    }
  }
}
