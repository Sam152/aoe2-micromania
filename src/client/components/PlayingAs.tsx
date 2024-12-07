import { ConnectedState } from "../hooks/useConnectedState";
import { HStack, Image, Text, TextProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import assetUrl from "../util/assetUrl";

export function PlayingAs({ connectedState }: { connectedState: ConnectedState }) {
  const queued = connectedState.queuedPlayers.includes(connectedState.clientId);

  if (queued) {
    const positionInQueue = connectedState.queuedPlayers.findIndex((item) => item === connectedState.clientId) + 1;

    return (
      <Label pr={6}>
        Queued {numberToOrdinal(positionInQueue)} of {connectedState.queuedPlayers.length}
      </Label>
    );
  }

  if (connectedState.activePlayers[connectedState.clientId]) {
    return (
      <HStack spacing={6}>
        <Label>Playing as</Label>
        <Image
          src={assetUrl(`graphics/players/p-${connectedState.activePlayers[connectedState.clientId]}.png`)}
          sx={{ aspectRatio: `${256 / 107}` }}
          height="53px"
        />
      </HStack>
    );
  }

  return null;
}

function Label({ children, ...props }: { children: ReactNode } & TextProps) {
  return (
    <Text display="block" textTransform="uppercase" fontWeight="bold" fontSize="sm" {...props}>
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
