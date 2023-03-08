import { defaultState as defaultGameState, gameStateMutator } from '../gameState';
import { clientStateMutator, defaultState as defaultClientState } from '../clientState';
import { normalizeGameStateAction, normalizeGameStateObject } from '../../util/normalizer';
import TransportEvent from '../transport/TransportEvent';
var NetworkedStateManager = (function () {
    function NetworkedStateManager(socket, playingAs, onActionCallback) {
        if (onActionCallback === void 0) { onActionCallback = null; }
        this.gameState = defaultGameState();
        this.clientState = defaultClientState(playingAs);
        this.socket = socket;
        this.onActionCallback = onActionCallback;
    }
    NetworkedStateManager.prototype.dispatchClient = function (action) {
        this.clientState = clientStateMutator(this.clientState, action);
    };
    NetworkedStateManager.prototype.dispatchGame = function (action) {
        this.socket.emit(TransportEvent.GameStateActionDispatch, action);
    };
    NetworkedStateManager.prototype.getClientState = function () {
        return this.clientState;
    };
    NetworkedStateManager.prototype.getGameState = function () {
        return this.gameState;
    };
    NetworkedStateManager.prototype.init = function () {
        var _this = this;
        this.socket.off(TransportEvent.GameStateActionTransmit);
        this.socket.off(TransportEvent.WholeGameStateTransmit);
        this.socket.on(TransportEvent.WholeGameStateTransmit, function (serverState) {
            _this.gameState = normalizeGameStateObject(serverState);
        });
        this.socket.on(TransportEvent.GameStateActionTransmit, function (serverAction) {
            var action = normalizeGameStateAction(serverAction);
            _this.gameState = gameStateMutator(_this.gameState, action);
            if (_this.onActionCallback) {
                _this.onActionCallback(action, _this.gameState);
            }
        });
    };
    NetworkedStateManager.prototype.cleanUp = function () {
    };
    return NetworkedStateManager;
}());
export default NetworkedStateManager;
//# sourceMappingURL=NetworkedStateManager.js.map