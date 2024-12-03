import { io, Socket } from "socket.io-client";
import { ManagerOptions } from "socket.io-client/build/esm/manager";
import { SocketOptions } from "socket.io-client/build/esm/socket";
import { useHasConnected } from "./useHasConnected";
import { useEffect, useState } from "react";

const regionalServers = [];

type UseRegionalConnectionReturn =
  | {
      hasConnected: boolean;
      connection: Socket;
    }
  | { hasConnected: false };

const config: Partial<ManagerOptions & SocketOptions> = {
  transports: ["websocket"],
};

const createRegionalConnection: () => Promise<Socket> = async () => {
  // Local development has no host to configure.
  if (!process.env.IS_AWS_DEPLOYMENT) {
    return io(config);
  }
};

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
