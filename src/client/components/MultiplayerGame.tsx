import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import React, {useState} from 'react';
import useConnection from '../hooks/useConnection';
import {Heading, Stack} from "@chakra-ui/react";

const MultiplayerGame = React.memo(function({playingAs}: {playingAs: number}) {
    const [winner, setWinner] = useState<number>();

    const connection = useConnection();
    const state = new NetworkedStateManager(connection, playingAs, (action, state) => {
        if (action.n === 'GAME_ENDED' || action.n === 'PLAYER_DISCONNECTED') {
            setWinner(state.winner);
        }
    });
    state.init();

    return (
        <div>

                <Stack>
                    <Heading fontFamily={'victory'}>
                        You are victorious!
                    </Heading>
                </Stack>
            { winner && (
                <>
                </>
            )}

            <GameCanvas stateManager={state} />
        </div>
    );
});
MultiplayerGame.displayName = 'MultiplayerGame';

export default MultiplayerGame;
