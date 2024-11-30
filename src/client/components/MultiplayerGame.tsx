import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import React, {useMemo, useState} from 'react';
import useConnection from '../hooks/useConnection';
import {Box} from '@chakra-ui/react';

const MultiplayerGame = React.memo(function ({playingAs}: { playingAs: number }) {
    const [winner, setWinner] = useState<number>();

    const connection = useConnection();

    const state = useMemo(() => {
        return new NetworkedStateManager(connection, playingAs);
    }, []);

    return (
        <Box position="relative">
            <GameCanvas stateManager={state}/>
        </Box>
    );
});

MultiplayerGame.displayName = 'MultiplayerGame';

export default MultiplayerGame;
