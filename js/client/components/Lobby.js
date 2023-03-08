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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import RoomList from './RoomList';
import useEmittedData from '../hooks/useEmittedData';
import Room from './Room';
import RoomStatus from '../../common/rooms/RoomStatus';
import MultiplayerGame from './MultiplayerGame';
import { useState } from 'react';
import SinglePlayerGame from './SinglePlayerGame';
export default function Lobby(_a) {
    var io = _a.io;
    return (_jsx(SinglePlayerGame, {}));
    var playerInfo = useEmittedData(io, 'playerInfo', { inRoom: null, isSpectator: null });
    var roomList = useEmittedData(io, 'listRooms', []);
    var _b = useState(false), playingSinglePlayer = _b[0], setPlayingSinglePlayer = _b[1];
    return (_jsx("div", { children: playerInfo.inRoom ? (_jsxs(_Fragment, { children: [playerInfo.inRoom.status === RoomStatus.Gathering && (_jsx(Room, { io: io, playerInfo: playerInfo })), playerInfo.inRoom.status === RoomStatus.Started && (_jsx(MultiplayerGame, { io: io }))] })) : playingSinglePlayer ? (_jsx(SinglePlayerGame, {})) : (_jsxs(_Fragment, { children: [_jsx("button", __assign({ onClick: function () { return io.emit('createRoom'); } }, { children: "Create Room" })), _jsx("button", __assign({ onClick: function () { return setPlayingSinglePlayer(true); } }, { children: "Start Single Player" })), _jsx(RoomList, { io: io, roomList: roomList })] })) }));
}
//# sourceMappingURL=Lobby.js.map