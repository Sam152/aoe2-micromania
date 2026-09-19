import { useRegionalConnection } from "../hooks/useRegionalConnection.ts";
import { useMemo } from "react";
import { NetworkedStateManager } from "../../common/state/managers/NetworkedStateManager.ts";
import { GameCanvas } from "../components/GameCanvas.tsx";
import { useHiddenBodyOverflow } from "../hooks/useHiddenBodyOverflow.ts";

export function SpectateGame() {
  const connection = useRegionalConnection();
  useHiddenBodyOverflow();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      return new NetworkedStateManager(connection.connection);
    }
  }, [connection.hasConnected]);

  return <div style={{ position: "relative" }}>{state && <GameCanvas startAs="SPECTATOR" stateManager={state} />}</div>;
}
