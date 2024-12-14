import { useRegionalConnection } from "../hooks/useRegionalConnection";
import React, { useMemo } from "react";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import { Box } from "@chakra-ui/react";
import GameCanvas from "../components/GameCanvas";

export function SpectateGame() {
  const connection = useRegionalConnection();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      return new NetworkedStateManager(connection.connection);
    }
  }, [connection.hasConnected]);

  return <Box position="relative">{state && <GameCanvas startAs="SPECTATOR" stateManager={state} />}</Box>;
}
