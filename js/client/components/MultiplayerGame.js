import { jsx as _jsx } from "react/jsx-runtime";
import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/NetworkedStateManager';
export default function MultiplayerGame(_a) {
    var io = _a.io;
    var state = new NetworkedStateManager(io);
    state.init();
    return (_jsx("div", { children: _jsx(GameCanvas, { stateManager: state }) }));
}
//# sourceMappingURL=MultiplayerGame.js.map