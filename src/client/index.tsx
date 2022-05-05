import {createRoot} from 'react-dom/client';
import React from "react";
import App from "./App";
import {io} from "socket.io-client";
import {ConnectionContext} from "./hooks/useConnection";

const config = {
    transports: ['websocket'],
};
const connection = window.location.hostname === 'localhost' ? io(config) : io(`wss://${window.location.hostname}:3000`, config);

const root = createRoot(document.getElementById('ui'));
root.render(
    <ConnectionContext.Provider value={connection} >
        <App />
    </ConnectionContext.Provider>
);
