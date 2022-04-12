import { createServer } from "http";
import { Server } from "socket.io";
import {LocalStateManager, NetworkedStateManager} from "../common/state/StateManager";
import SpawnUnits from "../common/modes/SpawnUnits";

const httpServer = createServer();
const io = new Server(httpServer, {
    // options
});

io.on("connection", (socket) => {
    console.log('client connected');

    const state = new LocalStateManager((gameState) => {
        socket.emit('stateUpdated', state.getGameState());
    });
    state.init();

    const mode = new SpawnUnits();
    mode.start(state.dispatchGame.bind(state));

    socket.on('stateDispatch', (action) => {
        state.dispatchGame(action);
    });
});

httpServer.listen(3000);

console.log('STARTED');
