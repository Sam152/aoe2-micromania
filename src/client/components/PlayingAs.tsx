import { ConnectedState } from "../hooks/useConnectedState";
import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export function PlayingAs({ connectedState }: { connectedState: ConnectedState }) {
  const queued = connectedState.queuedPlayers.includes(connectedState.clientId);

  if (queued) {
    const positionInQueue = connectedState.queuedPlayers.findIndex((item) => item === connectedState.clientId) + 1;

    return (
      <Label>
        Queued {numberToOrdinal(positionInQueue)} of {connectedState.queuedPlayers.length}
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

function numberToOrdinal(n: number): string {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = n % 100;
  const suffix = v >= 11 && v <= 13 ? "th" : suffixes[Math.min(v % 10, 4)];
  return `${n}${suffix}`;
}
