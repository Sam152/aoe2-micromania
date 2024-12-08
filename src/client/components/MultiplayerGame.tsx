import GameCanvas from "./GameCanvas";
import NetworkedStateManager from "../../common/state/managers/NetworkedStateManager";
import React, { useMemo } from "react";
import { Box } from "@chakra-ui/react";
import { useRegionalConnection } from "../hooks/useRegionalConnection";
import { connectedEvents, gameStateToConnectedState, useConnectedState } from "../hooks/useConnectedState";

const MultiplayerGame = React.memo(function () {
  const connection = useRegionalConnection();
  const [, setConnectedState] = useConnectedState();

  const state = useMemo<NetworkedStateManager | undefined>(() => {
    if (connection.hasConnected) {
      const stateManager = new NetworkedStateManager(connection.connection);

      stateManager.addGameStateListener((state, action) => {
        // Only update connected state every so often, to prevent trashing
        // react.
        if (connectedEvents.includes(action.n)) {
          setConnectedState(gameStateToConnectedState(state, connection.connection));
        }
      });

      return stateManager;
    }
  }, [connection.hasConnected]);

  return <Box position="relative">{state && <GameCanvas stateManager={state} />}</Box>;
});

export default MultiplayerGame;
