import {GameState, GameStateAction, ReplayItem} from '../../types';
import {useParams} from 'react-router-dom';
import useFetched from '../hooks/useFetched';
import React, {useEffect, useMemo, useState} from 'react';
import LocalStateManager from '../../common/state/managers/LocalStateManager';
import {Box} from '@chakra-ui/react';
import {ReplayOverBanner} from '../components/VictoryBanner';
import GameCanvas from '../components/GameCanvas';
import config from '../../common/config';
import {normalizeGameStateAction} from '../../common/util/normalizer';

let interval: NodeJS.Timer;

export default function Replay() {
    const {replayId} = useParams();
    const replay = useFetched<ReplayItem>(`/recs/${replayId}.json`, null);

    const [replayOver, setReplayOver] = useState(false);
    const stateManager = useMemo(() => {
        if (!replay) {
            return;
        }
        const manager = new LocalStateManager(null);
        manager.addGameStateListener((state: GameState, action: GameStateAction) => {
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setReplayOver(true);
            }
        });

        const playableActions = JSON.parse(JSON.stringify(replay.actions));

        interval = setInterval(playTick, 1000 / config.ticksPerSecond);
        function playTick() {
            while (true) {
                const action = playableActions.shift();
                manager.dispatchGame(normalizeGameStateAction(action));

                if (playableActions.length === 0) {
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

    useEffect(() => {
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, []);

    return (
        <Box pos="relative">
            {replayOver && (
                <ReplayOverBanner/>
            )}
            {stateManager && (
                <GameCanvas stateManager={stateManager} />
            )}
        </Box>
    );
}
