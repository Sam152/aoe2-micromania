import LocalStateManager from '../../common/state/managers/LocalStateManager';
import ArcherMicro from '../../common/modes/ArcherMicro';
import RoomStatus from './RoomStatus';
import { normalizeGameStateAction } from '../../common/util/normalizer';
import TransportEvent from '../../common/state/transport/TransportEvent';
import RecordedGame from '../recs/RecordedGame';
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
        var leavingIndex = this.players.findIndex(function (player) { return player.socket.id === leavingPlayer.socket.id; });
        this.players = this.players.filter(function (player) { return player.socket.id !== leavingPlayer.socket.id; });
        leavingPlayer.socket.leave(this.id);
        leavingPlayer.socket.removeAllListeners(TransportEvent.GameStateActionDispatch);
        if (this.status === RoomStatus.Starting || this.status === RoomStatus.Started) {
            this.state.dispatchGame({ n: 'PLAYER_DISCONNECTED', player: leavingIndex + 1 });
            this.endGame();
        }
    };
    Room.prototype.spectate = function (player) {
        var _this = this;
        this.spectators.push(player);
        player.socket.join(this.id);
        player.socket.on(TransportEvent.GameStateActionDispatch, function (action) {
            if (action.n === 'SPECTATOR_LOADED') {
                player.socket.emit(TransportEvent.WholeGameStateTransmit, _this.state.getGameState());
            }
        });
    };
    Room.prototype.hasPlayer = function (player) {
        return this.players.find(function (p) { return p.socket.id === player.socket.id; }) !== undefined;
    };
    Room.prototype.getPlayerId = function (player) {
        if (!this.hasPlayer(player)) {
            return null;
        }
        return this.players.findIndex(function (p) { return p.socket.id === player.socket.id; }) + 1;
    };
    Room.prototype.hasSpectator = function (player) {
        return this.spectators.find(function (p) { return p.socket.id === player.socket.id; }) !== undefined;
    };
    Room.prototype.endGame = function () {
        if (this.status !== RoomStatus.Completed) {
            this.players.map(function (player) { return player.socket.removeAllListeners(TransportEvent.GameStateActionDispatch); });
            this.state.cleanUp();
            this.recordedGame.completeRecording();
            this.status = RoomStatus.Completed;
        }
    };
    Room.prototype.startGame = function (onStarted) {
        var _this = this;
        this.status = RoomStatus.Starting;
        var gameMode = new ArcherMicro();
        this.recordedGame = new RecordedGame(this.players.map(function (player) { return player.getNickname(); }));
        this.state = new LocalStateManager(function (gameState, action) {
            _this.room.emit(TransportEvent.GameStateActionTransmit, action);
            _this.recordedGame.pushAction(action);
            if (action.n === 'T') {
                gameMode.onTick(gameState, action, _this.state.dispatchGame.bind(_this.state));
            }
            if (gameState.gameEnded) {
                _this.endGame();
            }
        });
        this.players.map(function (player) {
            player.socket.on(TransportEvent.GameStateActionDispatch, function (action) {
                _this.state.dispatchGame(normalizeGameStateAction(action));
                if (!_this.state.getGameState().gameModeStarted && _this.state.getGameState().loadedPlayers.length === _this.players.length) {
                    _this.state.init();
                    gameMode.start(_this.state.dispatchGame.bind(_this.state), _this.state.getGameState());
                    _this.state.dispatchGame({ n: 'GAME_MODE_STARTED' });
                    _this.status = RoomStatus.Started;
                    onStarted();
                }
            });
        });
    };
    Room.prototype.toEmitted = function () {
        return {
            id: this.id,
            players: this.players.length,
            spectators: this.spectators.length,
            slots: this.slots,
            status: this.status,
            joinable: this.status === RoomStatus.Gathering && this.players.length < this.slots,
            playersList: this.players.map(function (player) { return ({
                id: player.socket.id,
                name: player.getNickname()
            }); })
        };
    };
    return Room;
}());
export default Room;
//# sourceMappingURL=Room.js.map