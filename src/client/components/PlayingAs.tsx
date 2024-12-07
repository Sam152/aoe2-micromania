import { ConnectedState } from "../hooks/useConnectedState";
import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export function PlayingAs({ connectedState }: { connectedState: ConnectedState }) {
  const queued = connectedState.queuedPlayers.includes(connectedState.clientId);

  if (queued) {
    const positionInQueue = connectedState.queuedPlayers.findIndex((item) => item === connectedState.clientId) + 1;

    return (
      <Label>
        Queued {positionInQueue} out of {connectedState.queuedPlayers.length}
      </Label>
    );
  }

  if (connectedState.activePlayers[connectedState.clientId]) {
    return <Label>Playing as {connectedState.activePlayers[connectedState.clientId]}</Label>;
  }

  return null;
}

function Label({ children }: { children: ReactNode }) {
  return (
    <Text textTransform="uppercase" fontWeight="bold" fontSize="sm">
      {children}
    </Text>
  );
}
