import Room from './Room';
import generateId from '../../common/util/generateId';
import RoomStatus from './RoomStatus';
var RoomManager = (function () {
    function RoomManager(io) {
        this.rooms = {};
        this.io = io;
    }
    RoomManager.prototype.createRoom = function (roomOwner) {
        if (this.playerIsInRoom(roomOwner)) {
            return;
        }
        var id = generateId(12);
        this.rooms[id] = new Room(id, 2, this.io.to(id));
        this.joinRoom(id, roomOwner);
        return this.rooms[id];
    };
    RoomManager.prototype.quickJoin = function (player) {
        var existingRoom = this.getRoomWithPlayer(player);
        if (existingRoom) {
            this.leaveRoom(player);
        }
        var joinRoom = this.getRoomsOldestFirst()
            .filter(function (_a) {
            var status = _a.status;
            return status === RoomStatus.Gathering;
        })
            .find(function (room) { return room.players.length < room.slots; });
        if (joinRoom) {
            this.joinRoom(joinRoom.id, player);
            return joinRoom;
        }
        else {
            return this.createRoom(player);
        }
    };
    RoomManager.prototype.getRooms = function () {
        return Object.values(this.rooms).reverse();
    };
    RoomManager.prototype.getRoomsOldestFirst = function () {
        return Object.values(this.rooms);
    };
    RoomManager.prototype.cleanRooms = function () {
        var _this = this;
        Object.keys(this.rooms).forEach(function (roomId) {
            var room = _this.rooms[roomId];
            if (room.status === RoomStatus.Completed) {
                delete _this.rooms[roomId];
            }
        });
    };
    RoomManager.prototype.getRoom = function (id) {
        return this.rooms[id];
    };
    RoomManager.prototype.joinRoom = function (id, player) {
        if (this.playerIsInRoom(player)) {
            var room_1 = this.getRoomWithPlayer(player);
            if (room_1.hasPlayer(player)) {
                return;
            }
            else {
                room_1.leave(player);
            }
        }
        var room = this.getRoom(id);
        if (room.status === RoomStatus.Started) {
            return;
        }
        if (room.isFull()) {
            return;
        }
        room.join(player);
    };
    RoomManager.prototype.spectateRoom = function (id, player) {
        if (this.playerIsInRoom(player)) {
            var room_2 = this.getRoomWithPlayer(player);
            if (room_2.hasSpectator(player)) {
                return;
            }
            else {
                room_2.leave(player);
            }
        }
        var room = this.getRoom(id);
        if (!room) {
            return;
        }
        room.spectate(player);
    };
    RoomManager.prototype.leaveRoom = function (player) {
        var playerRoom = this.getRoomWithPlayer(player);
        if (playerRoom) {
            playerRoom.leave(player);
            if (playerRoom.status === RoomStatus.Gathering && playerRoom.players.length === 0 && playerRoom.spectators.length === 0) {
                delete this.rooms[playerRoom.id];
            }
            return playerRoom;
        }
        return null;
    };
    RoomManager.prototype.getRoomWithPlayer = function (player) {
        var _a;
        return (_a = this.getRooms().find(function (room) { return room.hasPlayer(player) || room.hasSpectator(player); })) !== null && _a !== void 0 ? _a : null;
    };
    RoomManager.prototype.playerIsInRoom = function (player) {
        return this.getRoomWithPlayer(player) !== null;
    };
    RoomManager.prototype.emitRooms = function (emitter) {
        emitter.emit('listRooms', this.getRooms().map(function (room) { return room.toEmitted(); }));
    };
    RoomManager.prototype.emitPlayerInfoForRoom = function (roomId) {
        var _this = this;
        var room = this.getRoom(roomId);
        if (!room) {
            return;
        }
        room.players.map(function (player) { return _this.emitPlayerInfo(player); });
        room.spectators.map(function (player) { return _this.emitPlayerInfo(player); });
    };
    RoomManager.prototype.emitPlayerInfo = function (player) {
        var playerRoom = this.getRoomWithPlayer(player);
        player.socket.emit('playerInfo', {
            inRoom: playerRoom ? playerRoom.toEmitted() : null,
            isSpectator: playerRoom ? playerRoom.hasSpectator(player) : null,
            playingAs: playerRoom ? playerRoom.getPlayerId(player) : null
        });
    };
    return RoomManager;
}());
export default RoomManager;
//# sourceMappingURL=RoomManager.js.map