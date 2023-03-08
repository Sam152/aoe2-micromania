import { useCallback, useEffect, useReducer } from 'react';
import useConnection, { usePlayerInfo } from './useConnection';
import { useNavigate } from 'react-router-dom';
import TransportEvent from '../../common/state/transport/TransportEvent';
export default function useLobbyNavigation() {
    var io = useConnection();
    var playerInfo = usePlayerInfo();
    var navigate = useNavigate();
    var _a = useReducer(function () { return true; }, false), isEnteringRoom = _a[0], enterRoom = _a[1];
    useEffect(function () {
        if (isEnteringRoom && playerInfo.inRoom) {
            navigate("/room/".concat(playerInfo.inRoom.id));
        }
        else if (playerInfo.inRoom) {
            io.emit(TransportEvent.LeaveRoom);
        }
    }, [playerInfo]);
    var emitAndEnter = useCallback(function (action, args) {
        if (args === void 0) { args = null; }
        io.emit(action, args);
        enterRoom();
    }, []);
    return emitAndEnter;
}
//# sourceMappingURL=useLobbyNavigation.js.map