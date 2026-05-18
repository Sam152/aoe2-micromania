import { ConnectedState } from "../hooks/useConnectedState.tsx";
import { CSSProperties, ReactNode } from "react";
import assetUrl from "../util/assetUrl.ts";

export function PlayingAs({ connectedState }: { connectedState: ConnectedState }) {
  const queued = connectedState.queuedPlayers.includes(connectedState.clientId);

  if (queued) {
    const positionInQueue = connectedState.queuedPlayers.findIndex((item) => item === connectedState.clientId) + 1;
    return (
      <Label style={{ paddingRight: 24 }}>
        Queued {positionInQueue} of {connectedState.queuedPlayers.length}
      </Label>
    );
  }

  if (connectedState.activePlayers[connectedState.clientId]) {
    return (
      <div className="hstack hstack-6">
        <Label>Playing as</Label>
        <img
          src={assetUrl(`graphics/players/p-${connectedState.activePlayers[connectedState.clientId]}.png`)}
          style={{ aspectRatio: String(256 / 107) }}
          height={53}
          alt="player color"
        />
      </div>
    );
  }

  return null;
}

function Label({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span className="playing-as-label" style={style}>
      {children}
    </span>
  );
}
