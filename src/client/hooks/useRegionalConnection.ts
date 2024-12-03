import { io, Socket } from "socket.io-client";
import { ManagerOptions } from "socket.io-client/build/esm/manager";
import { SocketOptions } from "socket.io-client/build/esm/socket";
import { useHasConnected } from "./useHasConnected";
import { useEffect, useState } from "react";

const regionalServers = ["https://us-east.aoe.cx", "https://ap-south.aoe.cx"];

async function createRegionalConnection(): Promise<Socket> {
  // Local development has no host to configure.
  if (!process.env.IS_AWS_DEPLOYMENT) {
    return io(socketConfig);
  }

  const pings = (
    await Promise.all(
      regionalServers.map(async (server) => ({
        server,
        ping: await measurePing(server),
      })),
    )
  ).sort((a, b) => a.ping - b.ping);

  console.table(`---- MEASURED PINGS ----`);
  console.table(`------------------------`);
  console.table(pings);
}

async function measurePing(host: string) {
  const start = Date.now();
  try {
    await fetch(`${host}/ping`, { mode: "no-cors" });
  } finally {
    return Date.now() - start;
  }
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
