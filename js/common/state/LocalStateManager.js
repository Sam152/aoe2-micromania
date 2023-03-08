import { defaultState as defaultGameState, gameStateReducer } from './gameState';
import { clientStateReducer, defaultState as defaultClientState } from './clientState';
export var ticksPerSecond = 20;
export var gameSpeed = 1.7;
var LocalStateManager = (function () {
    function LocalStateManager(gameStateListener) {
        if (gameStateListener === void 0) { gameStateListener = null; }
        this.gameState = defaultGameState();
        this.clientState = defaultClientState();
        this.gameStateListener = gameStateListener;
    }
    LocalStateManager.prototype.dispatchClient = function (action) {
        this.clientState = clientStateReducer(this.clientState, action);
    };
    LocalStateManager.prototype.dispatchGame = function (action) {
        this.gameState = gameStateReducer(this.gameState, action);
        if (this.gameStateListener) {
            this.gameStateListener(this.gameState, action);
        }
    };
    LocalStateManager.prototype.getClientState = function () {
        return this.clientState;
    };
    LocalStateManager.prototype.getGameState = function () {
        return this.gameState;
    };
    LocalStateManager.prototype.init = function () {
        var _this = this;
        setInterval(function () { return _this.dispatchGame({ name: 'TICK' }); }, 1000 / ticksPerSecond);
    };
    return LocalStateManager;
}());
export default LocalStateManager;
//# sourceMappingURL=LocalStateManager.js.map