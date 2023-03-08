import { defaultState as defaultGameState, GameStateReducer } from "./GameState";
import { ClientStateReducer, defaultState as defaultClientState } from "./ClientState";
var LocalStateManager = (function () {
    function LocalStateManager() {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
    }
    LocalStateManager.prototype.dispatchClient = function (action) {
        this.clientState = ClientStateReducer(this.clientState, action);
    };
    LocalStateManager.prototype.dispatchGame = function (action) {
        this.gameState = GameStateReducer(this.gameState, action);
    };
    LocalStateManager.prototype.getClientState = function () {
        return this.clientState;
    };
    LocalStateManager.prototype.getGameState = function () {
        return this.gameState;
    };
    return LocalStateManager;
}());
var NetworkedStateManager = (function () {
    function NetworkedStateManager() {
        this.gameState = defaultGameState;
        this.clientState = defaultClientState;
    }
    NetworkedStateManager.prototype.dispatchClient = function (action) {
        this.clientState = ClientStateReducer(this.clientState, action);
    };
    NetworkedStateManager.prototype.dispatchGame = function (action) {
    };
    NetworkedStateManager.prototype.getClientState = function () {
        return undefined;
    };
    NetworkedStateManager.prototype.getGameState = function () {
        return undefined;
    };
    return NetworkedStateManager;
}());
export { LocalStateManager, NetworkedStateManager };
//# sourceMappingURL=StateManager.js.map