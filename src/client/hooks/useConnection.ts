import React, { useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export const ConnectionContext = React.createContext(null);
export default function useConnection(): Socket {
  return useContext<Socket>(ConnectionContext);
}

export function useHasConnected(): boolean {
  const connection = useConnection();
  const [hasConnected, setHasConnected] = useState<boolean>(false);
  useEffect(() => {
    if (connection.id) {
      setHasConnected(true);
    } else {
      connection.on("connect", () => {
        setHasConnected(true);
      });
    }
  }, []);
  return hasConnected;
}
