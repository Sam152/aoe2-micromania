import LocalStateManager from '../../common/state/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from './GameCanvas';
import {useMemo} from 'react';
import NetworkedStateManager from '../../common/state/NetworkedStateManager';
import {Socket} from 'socket.io-client';

export default function MultiplayerGame({io}: {io: Socket}) {
    const state = new NetworkedStateManager(io);
    state.init();

    return (
        <div>
            <GameCanvas stateManager={state} />
        </div>
    );
}
