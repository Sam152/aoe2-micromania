var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from '../components/GameCanvas';
import { useMemo, useState } from 'react';
import PatrollingAi from '../../common/ai/PatrollingAi';
import { Box } from '@chakra-ui/react';
import { SinglePlayerDefeatBanner, SinglePlayerVictoryBanner, } from '../components/VictoryBanner';
import { useParams } from 'react-router-dom';
export default function SinglePlayerGamePage() {
    var id = useParams().id;
    return (_jsx(SinglePlayerGame, {}, id));
}
function SinglePlayerGame() {
    var _a = useState(), winner = _a[0], setWinner = _a[1];
    var stateManager = useMemo(function () {
        var ai = new PatrollingAi(2);
        var gameMode = new ArcherMicro();
        var manager = new LocalStateManager(function (state, action) {
            if (action.n === 'T') {
                gameMode.onTick(state, action, manager.dispatchGame.bind(manager));
                ai.makeDecisions(state, action, manager.dispatchGame.bind(manager));
            }
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setWinner(state.winner);
            }
            if (state.gameEnded) {
                manager.cleanUp();
            }
        });
        manager.init();
        gameMode.start(manager.dispatchGame.bind(manager), manager.getGameState());
        return manager;
    }, []);
    return (_jsxs(Box, __assign({ pos: "relative" }, { children: [winner && (stateManager.getClientState().playingAs === winner ? (_jsx(SinglePlayerVictoryBanner, {})) : (_jsx(SinglePlayerDefeatBanner, {}))), _jsx(GameCanvas, { stateManager: stateManager })] })));
}
//# sourceMappingURL=SinglePlayerGame.js.map