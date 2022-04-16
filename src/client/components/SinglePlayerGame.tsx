import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from './GameCanvas';
import {useMemo} from 'react';

export default function SinglePlayerGame() {
    const stateManager = useMemo(() => {
        const state = new LocalStateManager();
        state.init();
        (new ArcherMicro()).start(state.dispatchGame.bind(state));
        return state;
    }, []);

    return (
        <div>
            <GameCanvas stateManager={stateManager} />
        </div>
    );
}
