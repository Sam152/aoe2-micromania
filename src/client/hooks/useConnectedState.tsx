import { createContext, Dispatch, ReactNode, useContext, useState } from "react";

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
