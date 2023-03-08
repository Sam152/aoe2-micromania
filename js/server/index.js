import { createServer } from 'http';
import { Server } from 'socket.io';
import RoomManager from '../common/rooms/RoomManager';
import Player from '../common/rooms/Player';
var httpServer = createServer();
var io = new Server(httpServer, {});
var roomManager = new RoomManager(io);
io.on('connection', function (socket) {
    var player = new Player(socket);
    roomManager.emitRooms(player.socket);
    socket.on('createRoom', function () {
        roomManager.createRoom(player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfo(player);
    });
    socket.on('joinRoom', function (roomId) {
        roomManager.joinRoom(roomId, player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfoForRoom(roomId);
    });
    socket.on('spectateRoom', function (roomId) {
        roomManager.spectateRoom(roomId, player);
        roomManager.emitRooms(io);
        roomManager.emitPlayerInfoForRoom(roomId);
    });
    socket.on('leaveRoom', function () {
        var leftRoom = roomManager.leaveRoom(player);
        if (leftRoom) {
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfo(player);
            roomManager.emitPlayerInfoForRoom(leftRoom.id);
        }
    });
    socket.on('startGame', function () {
        var room = roomManager.getRoomWithPlayer(player);
        if (room.hasPlayer(player)) {
            room.startGame();
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfoForRoom(room.id);
        }
    });
    socket.on('disconnect', function (reason) {
        var leftRoom = roomManager.leaveRoom(player);
        if (leftRoom) {
            roomManager.emitRooms(io);
            roomManager.emitPlayerInfo(player);
            roomManager.emitPlayerInfoForRoom(leftRoom.id);
        }
    });
});
httpServer.listen(3000);
//# sourceMappingURL=index.js.map