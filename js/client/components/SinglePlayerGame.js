import { jsx as _jsx } from "react/jsx-runtime";
import LocalStateManager from '../../common/state/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from './GameCanvas';
import { useMemo } from 'react';
export default function SinglePlayerGame() {
    var stateManager = useMemo(function () {
        var state = new LocalStateManager();
        state.init();
        (new ArcherMicro()).start(state.dispatchGame.bind(state));
        return state;
    }, []);
    return (_jsx("div", { children: _jsx(GameCanvas, { stateManager: stateManager }) }));
}
//# sourceMappingURL=SinglePlayerGame.js.map