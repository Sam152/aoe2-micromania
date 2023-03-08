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
import { useParams } from 'react-router-dom';
import useFetched from '../hooks/useFetched';
import { useMemo, useState } from 'react';
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import { Box } from '@chakra-ui/react';
import { SinglePlayerVictoryBanner } from '../components/VictoryBanner';
import GameCanvas from '../components/GameCanvas';
import config from '../../common/config';
import { normalizeGameStateAction } from '../../common/util/normalizer';
export default function Replay() {
    var replayId = useParams().replayId;
    var replay = useFetched("/recs/".concat(replayId, ".json"), null);
    var _a = useState(false), replayOver = _a[0], setReplayOver = _a[1];
    var stateManager = useMemo(function () {
        if (!replay) {
            return;
        }
        var manager = new LocalStateManager(function (state, action) {
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setReplayOver(true);
            }
        }, null);
        var playableActions = JSON.parse(JSON.stringify(replay.actions));
        var interval = setInterval(playTick, 1000 / config.ticksPerSecond);
        function playTick() {
            while (true) {
                var action = playableActions.shift();
                console.log(action);
                manager.dispatchGame(normalizeGameStateAction(action));
                if (action.length === 0) {
                    clearInterval(interval);
                    break;
                }
                if (action.n === 'T') {
                    break;
                }
            }
        }
        return manager;
    }, [replay]);
    return (_jsxs(Box, __assign({ pos: "relative" }, { children: [replayOver && (_jsx(SinglePlayerVictoryBanner, {})), stateManager && (_jsx(GameCanvas, { stateManager: stateManager }))] })));
}
//# sourceMappingURL=Replay.js.map