import { defaultState as defaultGameState, gameStateMutator } from '../gameState';
import { clientStateMutator, defaultState as defaultClientState } from '../clientState';
import config from '../../config';
var LocalStateManager = (function () {
    function LocalStateManager(gameStateListener, playingAs) {
        if (gameStateListener === void 0) { gameStateListener = null; }
        if (playingAs === void 0) { playingAs = 1; }
        this.gameState = defaultGameState();
        this.clientState = defaultClientState(playingAs);
        this.gameStateListener = gameStateListener;
    }
    LocalStateManager.prototype.dispatchClient = function (action) {
        this.clientState = clientStateMutator(this.clientState, action);
    };
    LocalStateManager.prototype.dispatchGame = function (action) {
        this.gameState = gameStateMutator(this.gameState, action);
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
        this.ticker = setInterval(function () { return _this.dispatchGame({ n: 'T' }); }, 1000 / config.ticksPerSecond);
    };
    LocalStateManager.prototype.cleanUp = function () {
        clearInterval(this.ticker);
    };
    return LocalStateManager;
}());
export default LocalStateManager;
//# sourceMappingURL=LocalStateManager.js.map