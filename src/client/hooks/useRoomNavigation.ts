import {useEffect, useReducer} from 'react';
import useConnection, {usePlayerInfo, useRoomList} from './useConnection';
import {useNavigate, useParams} from 'react-router-dom';
import TransportEvent from '../../common/state/transport/TransportEvent';

export default function useRoomNavigation() {
    const playerInfo = usePlayerInfo();
    const connection = useConnection();
    const navigate = useNavigate();
    const {roomId} = useParams();

    const room = playerInfo.inRoom;

    const [isLeaving, leaveRoom] = useReducer(() => true, false);
    useEffect(() => {
        if (!room && isLeaving) {
            navigate('/');
        }
        if (!room && !isLeaving) {
            connection.emit(TransportEvent.SpectateRoom, roomId);
        }
    }, [room]);

    return {
        canStart: room && room.players === room.slots && !playerInfo.isSpectator,
        startGame: () => connection.emit(TransportEvent.StartGame),
        canChangeToPlayer: room && room.players < room.slots && playerInfo.isSpectator,
        changeToPlayer: () => connection.emit(TransportEvent.JoinRoom, room.id),
        canChangeToSpectator: room && playerInfo.playingAs,
        changeToSpectator: () => connection.emit(TransportEvent.SpectateRoom, roomId),
        leaveRoom: () => {
            leaveRoom();
            connection.emit(TransportEvent.LeaveRoom);
        },
    };
}
