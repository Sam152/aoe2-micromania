import {io} from "socket.io-client";
import {createRoot} from "react-dom/client";
import Lobby from "./Lobby";

const connection = io();
const root = createRoot(document.getElementById('ui'));
root.render(<Lobby io={connection} />);
