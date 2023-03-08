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
import roomStatusLabel from '../../common/rooms/RoomStatusLabel';
export default function RoomList(_a) {
    var io = _a.io, roomList = _a.roomList;
    return (_jsxs("table", { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "ID" }), _jsx("th", { children: "Status" }), _jsx("th", { children: "Players" }), _jsx("th", { children: "Spectators" }), _jsx("th", {})] }) }), _jsx("tbody", { children: roomList.map(function (room) { return (_jsxs("tr", { children: [_jsx("td", { children: room.id }), _jsx("td", { children: roomStatusLabel.get(room.status) }), _jsxs("td", { children: [room.players, "/", room.slots] }), _jsx("td", { children: room.spectators }), _jsxs("td", { children: [_jsx("button", __assign({ disabled: !room.joinable, onClick: function () { return io.emit('joinRoom', room.id); } }, { children: "Join" })), _jsx("button", __assign({ onClick: function () { return io.emit('spectateRoom', room.id); } }, { children: "Spectate" }))] })] }, room.id)); }) })] }));
}
//# sourceMappingURL=RoomList.js.map