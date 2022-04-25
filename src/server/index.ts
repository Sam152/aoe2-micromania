import {createServer} from 'https';
import {Server} from 'socket.io';
import RoomManager from './rooms/RoomManager';
import Player from './rooms/Player';
import {RoomId} from '../types';
import * as fs from "fs";

const httpServer = createServer({
    key: fs.readFileSync(process.env.KEY_FILE),
    cert: fs.readFileSync(process.env.CERT_FILE),
});
const io = new Server(httpServer, {
    transports: ['websocket'],
});

const roomManager = new RoomManager(io);

console.log('Starting server');
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
        roomManager.emitPlayerInfoForRoom(roomId);
    });

    socket.on<RoomId>('spectateRoom', (roomId) => {
        roomManager.spectateRoom(roomId, player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfoForRoom(roomId);
    });

    socket.on('leaveRoom', () => {
        const leftRoom = roomManager.leaveRoom(player);
        if (leftRoom) {
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfo(player);
            roomManager.emitPlayerInfoForRoom(leftRoom.id);
        }
    });

    socket.on('startGame', () => {
        const room = roomManager.getRoomWithPlayer(player);

        // Make sure only players, not spectators can start games.
        if (room.hasPlayer(player)) {
            room.startGame();
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfoForRoom(room.id);
        }
    });

    socket.on('disconnect', (reason) => {
        const leftRoom = roomManager.leaveRoom(player);
        if (leftRoom) {
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfo(player);
            roomManager.emitPlayerInfoForRoom(leftRoom.id);
        }
    });
});

console.log('Listening');
httpServer.listen(3000, process.env.HOSTNAME);
