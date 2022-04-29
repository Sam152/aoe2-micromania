import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import GameCanvas from './GameCanvas';
import {useMemo} from 'react';
import {GameState, GameStateAction} from "../../types";
import PatrollingAi from "../../common/ai/PatrollingAi";

export default function SinglePlayerGame() {
    const stateManager = useMemo(() => {

        const ai = new PatrollingAi(2);
        const manager = new LocalStateManager((state: GameState, action: GameStateAction) => {
            ai.makeDecisions(state, action, manager.dispatchGame.bind(manager));
        });

        manager.init();
        (new ArcherMicro()).start(manager.dispatchGame.bind(manager), manager.getGameState());

        return manager;
    }, []);

    return (
        <div>
            <GameCanvas stateManager={stateManager} />
        </div>
    );
}
