import {GameState, GameStateAction, ReplayItem} from '../../types';
import {useParams} from 'react-router-dom';
import useFetched from '../hooks/useFetched';
import React, {useMemo, useState} from 'react';
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import {Box} from '@chakra-ui/react';
import {SinglePlayerVictoryBanner} from '../components/VictoryBanner';
import GameCanvas from '../components/GameCanvas';
import config from '../../common/config';
import {calcRelativePosition} from 'framer-motion/types/projection/geometry/delta-calc';
import {normalizeGameStateAction} from '../../common/util/normalizer';

export default function Replay() {
    const {replayId} = useParams();
    const replay = useFetched<ReplayItem>(`/recs/${replayId}.json`, null);

    const [replayOver, setReplayOver] = useState(false);
    const stateManager = useMemo(() => {
        if (!replay) {
            return;
        }
        const manager = new LocalStateManager((state: GameState, action: GameStateAction) => {
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setReplayOver(true);
            }
        }, null);

        const playableActions = JSON.parse(JSON.stringify(replay.actions));

        const interval = setInterval(playTick, 1000 / config.ticksPerSecond);
        function playTick() {
            while (true) {
                const action = playableActions.shift();
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

    return (
        <Box pos="relative">
            {replayOver && (
                <SinglePlayerVictoryBanner/>
            )}
            {stateManager && (
                <GameCanvas stateManager={stateManager} />
            )}
        </Box>
    );
}
