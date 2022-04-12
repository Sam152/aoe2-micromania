import { createServer } from "http";
import { Server } from "socket.io";
import SpawnUnits from "../common/modes/SpawnUnits";
import LocalStateManager from "../common/state/LocalStateManager";
import RoomManager from "../common/rooms/RoomManager";
import Player from "../common/rooms/Player";
import {RoomId} from "../types";

const httpServer = createServer();
const io = new Server(httpServer, {});

const roomManager = new RoomManager(io);

io.on('connection', (socket) => {
    const player = new Player(socket);
    roomManager.emitRooms(player.socket);

    socket.on('createRoom', () => {
        roomManager.createRoom(player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfo(player);
    });

    socket.on<RoomId>('joinRoom', (roomId) => {
        roomManager.joinRoom(roomId, player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfo(player);
    });

    socket.on<RoomId>('spectateRoom', (roomId) => {
        roomManager.spectateRoom(roomId, player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfo(player);
    });

    socket.on("disconnect", (reason) => {
        roomManager.leaveRoom(player);
        roomManager.emitRooms(io);
    });
});

httpServer.listen(3000);
console.log('Starting server');
