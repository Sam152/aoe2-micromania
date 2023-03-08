import LocalStateManager from '../state/LocalStateManager';
import ArcherMicro from '../modes/ArcherMicro';
import RoomStatus from './RoomStatus';
var Room = (function () {
    function Room(id, slots, room) {
        this.players = [];
        this.spectators = [];
        this.state = null;
        this.id = id;
        this.slots = slots;
        this.status = RoomStatus.Gathering;
        this.room = room;
    }
    Room.prototype.join = function (player) {
        this.players.push(player);
        player.socket.join(this.id);
    };
    Room.prototype.isFull = function () {
        return this.slots === this.players.length;
    };
    Room.prototype.leave = function (leavingPlayer) {
        this.spectators = this.spectators.filter(function (player) { return player.socket.id !== leavingPlayer.socket.id; });
        this.players = this.players.filter(function (player) { return player.socket.id !== leavingPlayer.socket.id; });
        leavingPlayer.socket.leave(this.id);
    };
    Room.prototype.spectate = function (player) {
        this.spectators.push(player);
        player.socket.join(this.id);
    };
    Room.prototype.hasPlayer = function (player) {
        return this.players.find(function (p) { return p.socket.id === player.socket.id; }) !== undefined;
    };
    Room.prototype.hasSpectator = function (player) {
        return this.spectators.find(function (p) { return p.socket.id === player.socket.id; }) !== undefined;
    };
    Room.prototype.startGame = function () {
        var _this = this;
        this.status = RoomStatus.Started;
        this.state = new LocalStateManager(function (gameState, action) {
            _this.room.emit('gameStateUpdated', gameState);
        });
        var gameMode = new ArcherMicro();
        gameMode.start(this.state.dispatchGame.bind(this.state));
        this.state.init();
    };
    Room.prototype.toEmitted = function () {
        return {
            id: this.id,
            players: this.players.length,
            spectators: this.spectators.length,
            slots: this.slots,
            status: this.status,
            joinable: this.status === RoomStatus.Gathering && this.players.length < this.slots
        };
    };
    return Room;
}());
export default Room;
//# sourceMappingURL=Room.js.map