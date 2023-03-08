import defaultNickname from '../../common/social/defaultNickname';
var Player = (function () {
    function Player(socket) {
        this.socket = socket;
    }
    Player.prototype.setNickname = function (nickname) {
        if (nickname.length > 1) {
            this.nickname = nickname.substring(0, 25);
        }
    };
    Player.prototype.getNickname = function () {
        return this.nickname || defaultNickname(this.socket.id);
    };
    return Player;
}());
export default Player;
//# sourceMappingURL=Player.js.map