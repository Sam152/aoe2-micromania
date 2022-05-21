import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from '../components/GameCanvas';
import React, {useMemo, useState} from 'react';
import {GameState, GameStateAction} from '../../types';
import PatrollingAi from '../../common/ai/PatrollingAi';
import {Box} from '@chakra-ui/react';
import {
    SinglePlayerDefeatBanner,
    SinglePlayerVictoryBanner,
} from "../components/VictoryBanner";
import {useParams} from "react-router-dom";

export default function SinglePlayerGamePage() {
    const {id} = useParams();
    return (
        <SinglePlayerGame key={id} />
    );
}

function SinglePlayerGame() {
    const [winner, setWinner] = useState<number>();

    const stateManager = useMemo(() => {
        const ai = new PatrollingAi(2);
        const gameMode = new ArcherMicro();

        const manager = new LocalStateManager((state: GameState, action: GameStateAction) => {
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

    return (
        <Box pos="relative">
            {winner && (stateManager.getClientState().playingAs === winner ? (
                <SinglePlayerVictoryBanner/>
            ) : (
                <SinglePlayerDefeatBanner/>
            ))}
            <GameCanvas stateManager={stateManager} />
        </Box>
    );
}
