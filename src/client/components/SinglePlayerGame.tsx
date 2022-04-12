import LocalStateManager from "../../common/state/LocalStateManager";
import SpawnUnits from "../../common/modes/SpawnUnits";
import GameCanvas from "./GameCanvas";
import {useMemo} from "react";

export default function SinglePlayerGame() {

    const stateManager = useMemo(() => {
        const state = new LocalStateManager();
        state.init();
        (new SpawnUnits()).start(state.dispatchGame.bind(state));
        return state;
    }, []);

    return (
        <div>
            Single player.
            <GameCanvas stateManager={stateManager} />
        </div>
    )
}
