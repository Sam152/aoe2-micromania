import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from '../components/GameCanvas';
import React, {useMemo} from 'react';
import {GameState, GameStateAction} from '../../types';
import PatrollingAi from '../../common/ai/PatrollingAi';
import {Box} from '@chakra-ui/react';
import {VictoryBanner} from "../components/VictoryBanner";

export default function SinglePlayerGame() {
    const stateManager = useMemo(() => {
        const ai = new PatrollingAi(2);
        const gameMode = new ArcherMicro();

        const manager = new LocalStateManager((state: GameState, action: GameStateAction) => {
            ai.makeDecisions(state, action, manager.dispatchGame.bind(manager));

            if (action.n === 'T') {
                gameMode.onTick(state, action, manager.dispatchGame.bind(manager));
            }
        });
        manager.init();
        gameMode.start(manager.dispatchGame.bind(manager), manager.getGameState());

        return manager;
    }, []);

    return (
        <Box pos="relative">
            <VictoryBanner />
            <GameCanvas stateManager={stateManager} />
        </Box>
    );
}
