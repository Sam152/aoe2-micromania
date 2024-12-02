import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { io } from "socket.io-client";
import { ConnectionContext } from "./hooks/useConnection";
import { ManagerOptions } from "socket.io-client/build/esm/manager";
import { SocketOptions } from "socket.io-client/build/esm/socket";

const config: Partial<ManagerOptions & SocketOptions> = {
  transports: ["websocket"],
};
const connection = process.env.SOCKET_HOST ? io(process.env.SOCKET_HOST, config) : io(config);

const root = createRoot(document.getElementById("ui"));
root.render(
  <ConnectionContext.Provider value={connection}>
    <App />
  </ConnectionContext.Provider>,
);
