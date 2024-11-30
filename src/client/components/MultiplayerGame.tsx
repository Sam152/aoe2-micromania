import GameCanvas from "./GameCanvas";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import React, { useMemo } from "react";
import useConnection, { useHasConnected } from "../hooks/useConnection";
import { Box } from "@chakra-ui/react";

const MultiplayerGame = React.memo(function () {
  const connection = useConnection();
  const hasConnected = useHasConnected();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (hasConnected) {
      return new NetworkedStateManager(connection);
    }
  }, [hasConnected]);

  return <Box position="relative">{state && <GameCanvas stateManager={state} />}</Box>;
});

MultiplayerGame.displayName = "MultiplayerGame";

export default MultiplayerGame;
