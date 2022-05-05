import RoomStatusLabel from '../../server/rooms/RoomStatusLabel';
import useConnection, {usePlayerInfo} from '../hooks/useConnection';
import {Button, useBoolean} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useReducer} from 'react';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from '../components/MultiplayerGame';

export default function Room() {
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
            connection.emit('spectateRoom', roomId);
        }
    }, [room]);


    if (room && [RoomStatus.Started, RoomStatus.Starting].includes(room.status)) {
        return (
            <MultiplayerGame playingAs={playerInfo.playingAs} />
        );
    }

    return room && (
        <div>
            <h1>Room</h1>
            <ul>
                <li><strong>Players:</strong> {room.players}/{room.slots}</li>
                <li><strong>ID:</strong> {room.id}</li>
                <li><strong>Status:</strong> {RoomStatusLabel.get(room.status)}</li>
                <li><strong>Spectators:</strong> {room.spectators}</li>
            </ul>

            {room.players === room.slots && !playerInfo.isSpectator && (
                <Button onClick={() => connection.emit('startGame')}>Start</Button>
            )}

            {room.players < room.slots && playerInfo.isSpectator && (
                <Button onClick={() => connection.emit('joinRoom', room.id)}>Join Lobby</Button>
            )}

            { playerInfo.playingAs && (
                <Button onClick={() => connection.emit('spectateRoom', roomId)}>Spectate Lobby</Button>
            )}

            <Button onClick={() => {
                leaveRoom(); connection.emit('leaveRoom');
            }}>Leave Lobby</Button>
        </div>
    );
}
