import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import React, {useMemo, useState} from 'react';
import useConnection from '../hooks/useConnection';
import {Box} from '@chakra-ui/react';
import {DefeatBanner, VictoryBanner} from './VictoryBanner';

const MultiplayerGame = React.memo(function({playingAs}: {playingAs: number}) {
    const [winner, setWinner] = useState<number>();

    const connection = useConnection();

    const state = useMemo(() => {
        const state = new NetworkedStateManager(connection, playingAs);
        state.addGameStateListener((state, action) => {
            if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
                setWinner(state.winner);
            }
        });
        return state;
    }, []);

    return (
        <Box position="relative">
            {winner && (state.getClientState().playingAs === winner ? (
                <VictoryBanner/>
            ) : (
                <DefeatBanner/>
            ))}
            <GameCanvas stateManager={state} />
        </Box>
    );
});
MultiplayerGame.displayName = 'MultiplayerGame';

export default MultiplayerGame;
