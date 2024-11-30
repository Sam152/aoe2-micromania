import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import React, {useMemo} from 'react';
import useConnection from '../hooks/useConnection';
import {Box} from '@chakra-ui/react';

const MultiplayerGame = React.memo(function () {
    const connection = useConnection();
    const state = useMemo(() => {
        return new NetworkedStateManager(connection);
    }, []);

    return (
        <Box position="relative">
            <GameCanvas stateManager={state}/>
        </Box>
    );
});

MultiplayerGame.displayName = 'MultiplayerGame';

export default MultiplayerGame;
