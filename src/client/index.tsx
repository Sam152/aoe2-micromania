import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import { io } from "socket.io-client";
import { ConnectionContext } from "./hooks/useConnection";

const config = {
  transports: ["websocket"],
};
const connection = io(config);

const root = createRoot(document.getElementById("ui"));
root.render(
  <ConnectionContext.Provider value={connection}>
    <App />
  </ConnectionContext.Provider>,
);
