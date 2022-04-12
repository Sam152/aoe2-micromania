import { createServer } from "http";
import { Server } from "socket.io";
import {LocalStateManager, NetworkedStateManager} from "../common/StateManager";

const httpServer = createServer();
const io = new Server(httpServer, {
    // options
});

io.on("connection", (socket) => {
    console.log('connected !!');

    const state = new LocalStateManager((gameState) => {
        socket.emit('updateState', state.getGameState());
    });
    state.init();

    socket.on("stateDispatch", (action) => {
        console.log(action);
        state.dispatchGame(action);
    });
});

httpServer.listen(3000);

console.log('STARTED');
