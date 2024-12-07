import { ConnectedState } from "../hooks/useConnectedState";

export function PlayingAs({ connectedState }: { connectedState: ConnectedState }) {
  const queued = connectedState.queuedPlayers.includes(connectedState.clientId);

  if (queued) {
    const positionInQueue = connectedState.queuedPlayers.findIndex((item) => item === connectedState.clientId) + 1;

    return (
      <>
        Queued {positionInQueue} out of {connectedState.queuedPlayers.length}
      </>
    );
  }

  if (connectedState.activePlayers[connectedState.clientId]) {
    return <>Playing as {connectedState.activePlayers[connectedState.clientId]}</>;
  }

  return null;
}
