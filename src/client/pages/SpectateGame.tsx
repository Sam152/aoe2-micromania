import { useRegionalConnection } from "../hooks/useRegionalConnection.ts";
import React, { useMemo } from "react";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager.ts";
import GameCanvas from "../components/GameCanvas.tsx";

export function SpectateGame() {
  const connection = useRegionalConnection();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      return new NetworkedStateManager(connection.connection);
    }
  }, [connection.hasConnected]);

  return <div style={{ position: "relative" }}>{state && <GameCanvas startAs="SPECTATOR" stateManager={state} />}</div>;
}
