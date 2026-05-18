import { useRegionalConnection } from "../hooks/useRegionalConnection.ts";
import { connectedEvents, gameStateToConnectedState, useConnectedState } from "../hooks/useConnectedState.tsx";
import { useEffect, useMemo } from "react";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager.ts";
import GameCanvas from "../components/GameCanvas.tsx";

export function GameScreen() {
  const connection = useRegionalConnection();
  const [, setConnectedState] = useConnectedState();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      const stateManager = new NetworkedStateManager(connection.connection);

      stateManager.addGameStateListener((state, action) => {
        if (connectedEvents.includes(action.n)) {
          setConnectedState(gameStateToConnectedState(state, connection.connection));
        }
      });

      return stateManager;
    }
  }, [connection.hasConnected]);

  useEffect(() => {
    return () => {
      setConnectedState(undefined);
    };
  }, []);

  return <div style={{ position: "relative" }}>{state && <GameCanvas startAs="CLIENT" stateManager={state} />}</div>;
}
