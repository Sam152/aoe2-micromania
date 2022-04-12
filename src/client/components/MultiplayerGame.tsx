import LocalStateManager from "../../common/state/LocalStateManager";
import SpawnUnits from "../../common/modes/SpawnUnits";
import GameCanvas from "./GameCanvas";
import {useMemo} from "react";
import NetworkedStateManager from "../../common/state/NetworkedStateManager";
import {Socket} from "socket.io-client";

export default function MultiplayerGame({io}: {io: Socket}) {

    const stateManager = useMemo(() => {
        const state = new NetworkedStateManager(io);
        state.init();
        return state;
    }, []);

    return (
        <div>
            <GameCanvas stateManager={stateManager} />
        </div>
    )
}
