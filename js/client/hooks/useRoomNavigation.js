import { useEffect, useReducer } from 'react';
import useConnection, { usePlayerInfo } from './useConnection';
import { useNavigate, useParams } from 'react-router-dom';
import TransportEvent from '../../common/state/transport/TransportEvent';
export default function useRoomNavigation() {
    var playerInfo = usePlayerInfo();
    var connection = useConnection();
    var navigate = useNavigate();
    var roomId = useParams().roomId;
    var room = playerInfo.inRoom;
    var _a = useReducer(function () { return true; }, false), isLeaving = _a[0], leaveRoom = _a[1];
    useEffect(function () {
        if (!room && isLeaving) {
            navigate('/');
        }
        if (!room && !isLeaving) {
            connection.emit(TransportEvent.SpectateRoom, roomId);
        }
    }, [room]);
    return {
        canStart: room && room.players === room.slots && !playerInfo.isSpectator,
        startGame: function () { return connection.emit(TransportEvent.StartGame); },
        canChangeToPlayer: room && room.players < room.slots && playerInfo.isSpectator,
        changeToPlayer: function () { return connection.emit(TransportEvent.JoinRoom, room.id); },
        canChangeToSpectator: room && playerInfo.playingAs,
        changeToSpectator: function () { return connection.emit(TransportEvent.SpectateRoom, roomId); },
        leaveRoom: function () {
            leaveRoom();
            connection.emit(TransportEvent.LeaveRoom);
        }
    };
}
//# sourceMappingURL=useRoomNavigation.js.map