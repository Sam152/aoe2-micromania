import { jsx as _jsx } from "react/jsx-runtime";
import { io } from 'socket.io-client';
import { createRoot } from 'react-dom/client';
import Lobby from './components/Lobby';
var connection = io();
var root = createRoot(document.getElementById('ui'));
root.render(_jsx(Lobby, { io: connection }));
//# sourceMappingURL=index.js.map