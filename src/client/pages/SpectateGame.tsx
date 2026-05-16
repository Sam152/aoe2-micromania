import { useRegionalConnection } from "../hooks/useRegionalConnection";
import React, { useMemo } from "react";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import GameCanvas from "../components/GameCanvas";

export function SpectateGame() {
  const connection = useRegionalConnection();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      return new NetworkedStateManager(connection.connection);
    }
  }, [connection.hasConnected]);

  return (
    <div style={{ position: "relative" }}>{state && <GameCanvas startAs="SPECTATOR" stateManager={state} />}</div>
  );
}
