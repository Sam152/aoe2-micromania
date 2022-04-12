import { createServer } from "http";
import { Server } from "socket.io";
import SpawnUnits from "../common/modes/SpawnUnits";
import LocalStateManager from "../common/state/LocalStateManager";
import RoomManager from "../common/rooms/RoomManager";

const httpServer = createServer();
const io = new Server(httpServer, {
    // options
});

const roomManager = new RoomManager();


io.on("connection", (socket) => {
    console.log('CONNECTED');
    console.log(socket.id);

    const state = new LocalStateManager((gameState) => {
        socket.emit('stateUpdated', state.getGameState());
    });
    state.init();

    const mode = new SpawnUnits();
    console.log('starting');
    mode.start(state.dispatchGame.bind(state));

    socket.on('stateDispatch', (action) => {
        state.dispatchGame(action);
    });
});

httpServer.listen(3000);

console.log('STARTED');
