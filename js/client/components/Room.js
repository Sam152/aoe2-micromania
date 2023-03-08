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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RoomStatusLabel from '../../common/rooms/RoomStatusLabel';
export default function Room(_a) {
    var io = _a.io, playerInfo = _a.playerInfo;
    var room = playerInfo.inRoom;
    return (_jsxs("div", { children: [_jsx("h1", { children: "Lobby" }), _jsxs("ul", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Players:" }), " ", room.players, "/", room.slots] }), _jsxs("li", { children: [_jsx("strong", { children: "ID:" }), " ", room.id] }), _jsxs("li", { children: [_jsx("strong", { children: "Status:" }), " ", RoomStatusLabel.get(room.status)] }), _jsxs("li", { children: [_jsx("strong", { children: "Spectators:" }), " ", room.spectators] })] }), room.players === room.slots && playerInfo.inRoom && (_jsx("button", __assign({ onClick: function () { return io.emit('startGame'); } }, { children: "Start" }))), _jsx("button", __assign({ onClick: function () { return io.emit('leaveRoom'); } }, { children: "Leave Lobby" }))] }));
}
//# sourceMappingURL=Room.js.map