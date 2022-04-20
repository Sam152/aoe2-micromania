import GameCanvas from './GameCanvas';
import NetworkedStateManager from '../../common/state/managers/NetworkedStateManager';
import {Socket} from 'socket.io-client';

export default function MultiplayerGame({io, playingAs}: {io: Socket, playingAs: number}) {
    const state = new NetworkedStateManager(io, playingAs);
    state.init();

    return (
        <div>
            <GameCanvas stateManager={state} />
        </div>
    );
}
