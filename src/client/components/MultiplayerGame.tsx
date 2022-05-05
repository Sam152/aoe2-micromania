import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import React from 'react';
import useConnection from "../hooks/useConnection";


const MultiplayerGame = React.memo(function({playingAs}: {playingAs: number}) {
    const connection = useConnection();
    const state = new NetworkedStateManager(connection, playingAs);
    state.init();

    return (
        <div>
            <GameCanvas stateManager={state} />
        </div>
    );
});
MultiplayerGame.displayName = 'MultiplayerGame';

export default MultiplayerGame;
