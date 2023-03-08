import InputManager from '../../input/InputManager';
import { clientStateTransmitter } from '../clientState';
import CanvasRenderer from '../../drawing/CanvasRenderer';
import Grid from '../../terrain/Grid';
var RenderLoopManager = (function () {
    function RenderLoopManager(stateManager, canvas) {
        this.stateManager = stateManager;
        this.renderer = new CanvasRenderer(canvas);
        this.inputManager = new InputManager(canvas, stateManager, clientStateTransmitter);
    }
    RenderLoopManager.prototype.start = function () {
        var _this = this;
        this.renderer.bootUp().then(function () {
            if (_this.stateManager.getClientState().playingAs) {
                _this.stateManager.dispatchGame({
                    n: 'CLIENT_LOADED',
                    player: _this.stateManager.getClientState().playingAs
                });
            }
            else {
                _this.stateManager.dispatchGame({
                    n: 'SPECTATOR_LOADED'
                });
            }
            _this.stateManager.dispatchClient({
                n: 'FIXATE_CAMERA',
                location: (new Grid(_this.stateManager.getGameState().mapSize)).middleOfGrid().sub(_this.renderer.getSize().divideScalar(2))
            });
            _this.render();
        });
    };
    RenderLoopManager.prototype.stop = function () {
        this.inputManager.cleanUp();
    };
    RenderLoopManager.prototype.render = function () {
        this.stateManager.dispatchClient({ n: 'FRAME_RENDERING_STARTED' });
        this.renderer.render(this.stateManager.getGameState(), this.stateManager.getClientState(), this.stateManager.dispatchClient.bind(this.stateManager));
        this.inputManager.dispatchInput(this.stateManager.getClientState().camera);
        this.inputManager.clearInput();
        window.requestAnimationFrame(this.render.bind(this));
    };
    return RenderLoopManager;
}());
export default RenderLoopManager;
//# sourceMappingURL=RenderLoopManager.js.map