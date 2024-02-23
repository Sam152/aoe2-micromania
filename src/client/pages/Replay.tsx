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

        const playableActions = JSON.parse(JSON.stringify(replay.actions));
        const manager = new LocalStateManager(null, () => {
            while (true) {
                const action = playableActions.shift();
                manager.dispatchGame(normalizeGameStateAction(action));

                if (playableActions.length === 0) {
                    manager.cleanUp();
                    break;
                }
                if (action.n === 'T') {
                    break;
                }
            }
        });

        manager.addGameStateListener((state: GameState, action: GameStateAction) => {
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setReplayOver(true);
            }
        });

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
