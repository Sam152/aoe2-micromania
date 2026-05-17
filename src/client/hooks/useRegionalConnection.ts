import { io, ManagerOptions, Socket, SocketOptions } from "socket.io-client";
import { useHasConnected } from "./useHasConnected.ts";
import { useEffect, useState } from "react";
import { resolveServerFromCache } from "../servers/resolveServerFromCache.ts";

async function createRegionalConnection(): Promise<Socket> {
  // Local development has no host to configure.
  if (!process.env.IS_AWS_DEPLOYMENT) {
    return io(socketConfig);
  }
  const server = await resolveServerFromCache();
  return io(server, socketConfig);
}

const socketConfig: Partial<ManagerOptions & SocketOptions> = {
  transports: ["websocket"],
};

type UseRegionalConnectionReturn =
  | {
    hasConnected: boolean;
    connection: Socket;
  }
  | { hasConnected: false };

export function useRegionalConnection(): UseRegionalConnectionReturn {
  const [hookConnection, setConnection] = useState<Socket | undefined>();
  useEffect(() => {
    const connection = createRegionalConnection();
    connection.then(setConnection);
    // When a component using a connection unmounts, disconnect the connection.
    return () => {
      connection.then((c) => c.disconnect());
    };
  }, []);

  const hasConnected = useHasConnected(hookConnection);
  return {
    connection: hookConnection,
    hasConnected: hasConnected,
  };
}
