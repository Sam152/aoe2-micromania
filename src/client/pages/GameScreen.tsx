import { useRegionalConnection } from "../hooks/useRegionalConnection";
import { connectedEvents, gameStateToConnectedState, useConnectedState } from "../hooks/useConnectedState";
import React, { useEffect, useMemo } from "react";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import GameCanvas from "../components/GameCanvas";

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
