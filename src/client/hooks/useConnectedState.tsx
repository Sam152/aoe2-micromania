import { createContext, Dispatch, ReactNode, useContext, useState } from "react";
import { GameState } from "../../types";
import { Socket } from "socket.io-client";

export const connectedEvents = ["CLIENT_LOADED_WITH_ID", "CLIENT_DISCONNECTED_WITH_ID", "CYCLE_PLAYER"];

export function gameStateToConnectedState(state: GameState, socket: Socket): ConnectedState {
  return {
    clientId: socket.id,
    activePlayers: state.activePlayers,
    queuedPlayers: state.queuedPlayers,
  };
}

const ConnectedStateContext = createContext<[ConnectedState, Dispatch<ConnectedState>] | null>(null);

export type ConnectedState = {
  clientId: string;
  activePlayers: Record<string, number>;
  queuedPlayers: string[];
};

export function useConnectedState() {
  const context = useContext(ConnectedStateContext);
  if (!context) {
    throw new Error("useConnectedState must be used within a provider");
  }
  return context;
}

export function ConnectedStateProvider({ children }: { children: ReactNode }) {
  const value = useState<ConnectedState>();
  return <ConnectedStateContext.Provider value={value}>{children}</ConnectedStateContext.Provider>;
}
