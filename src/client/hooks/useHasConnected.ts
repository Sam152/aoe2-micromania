import { Socket } from "socket.io-client";
import { useEffect, useState } from "react";

export function useHasConnected(connection: Socket | undefined): boolean {
  const [hasConnected, setHasConnected] = useState<boolean>(false);
  useEffect(() => {
    if (!connection) {
      return;
    }
    if (connection.id) {
      setHasConnected(true);
    } else {
      connection.on("connect", () => {
        setHasConnected(true);
      });
    }
  }, [connection === undefined]);
  return hasConnected;
}
