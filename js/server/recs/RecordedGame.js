var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as fs from 'fs';
import generateId from '../../common/util/generateId';
var RecordedGame = (function () {
    function RecordedGame(players) {
        this.players = players;
        this.startTime = (new Date()).getTime();
        this.actions = [];
    }
    RecordedGame.prototype.pushAction = function (action) {
        this.actions.push(action);
    };
    RecordedGame.prototype.completeRecording = function () {
        this.endTime = (new Date()).getTime();
        var metadata = {
            engineVersion: 1,
            id: "".concat(this.endTime, "-").concat(generateId(6)),
            players: this.players,
            start: this.startTime,
            end: this.endTime
        };
        var rec = __assign(__assign({}, metadata), { actions: this.actions });
        fs.writeFile("".concat(process.env.RECORDED_GAMES_DIRECTORY || '../game-recs', "/").concat(metadata.id, ".json"), JSON.stringify(rec), function (err) { return err && console.log(err); });
        fs.writeFile("".concat(process.env.RECORDED_GAMES_DIRECTORY || '../game-recs', "/").concat(metadata.id, ".metadata.json"), JSON.stringify(metadata), function (err) { return err && console.log(err); });
    };
    return RecordedGame;
}());
export default RecordedGame;
//# sourceMappingURL=RecordedGame.js.map