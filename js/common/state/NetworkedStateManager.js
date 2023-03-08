import { defaultState as defaultGameState } from './gameState';
import { clientStateReducer, defaultState as defaultClientState } from './clientState';
var NetworkedStateManager = (function () {
    function NetworkedStateManager(socket) {
        this.gameState = defaultGameState();
        this.clientState = defaultClientState();
        this.socket = socket;
    }
    NetworkedStateManager.prototype.dispatchClient = function (action) {
        this.clientState = clientStateReducer(this.clientState, action);
    };
    NetworkedStateManager.prototype.dispatchGame = function (action) {
        this.socket.emit('stateDispatch', action);
    };
    NetworkedStateManager.prototype.getClientState = function () {
        return this.clientState;
    };
    NetworkedStateManager.prototype.getGameState = function () {
        return this.gameState;
    };
    NetworkedStateManager.prototype.init = function () {
        var _this = this;
        this.socket.on('gameStateUpdated', function (serverState) { return _this.gameState = serverState; });
    };
    return NetworkedStateManager;
}());
export default NetworkedStateManager;
//# sourceMappingURL=NetworkedStateManager.js.map