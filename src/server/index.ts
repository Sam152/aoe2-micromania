import { createServer } from "http";
import { Server } from "socket.io";
import SpawnUnits from "../common/modes/SpawnUnits";
import LocalStateManager from "../common/state/LocalStateManager";
import RoomManager from "../common/rooms/RoomManager";
import Player from "../common/rooms/Player";

const httpServer = createServer();
const io = new Server(httpServer, {
    // options
});

const roomManager = new RoomManager(io);

io.on('connection', (socket) => {
    const player = new Player(socket);
    roomManager.emitRooms(player.socket);

    socket.on('createRoom', () => {
       const room = roomManager.createRoom();
        room.join(player);
    });

    socket.on('stateDispatch', (action) => {
        // Do something with the state?
    });
});

httpServer.listen(3000);

console.log('STARTED');
