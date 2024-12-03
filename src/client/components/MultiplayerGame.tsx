import GameCanvas from "./GameCanvas";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { useRegionalConnection } from "../hooks/useRegionalConnection";

const MultiplayerGame = React.memo(function () {
  const connection = useRegionalConnection();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      return new NetworkedStateManager(connection.connection);
    }
  }, [connection.hasConnected]);

  return <Box position="relative">{state && <GameCanvas stateManager={state} />}</Box>;
});

export default MultiplayerGame;
