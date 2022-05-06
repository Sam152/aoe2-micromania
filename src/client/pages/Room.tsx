import RoomStatusLabel from '../../server/rooms/RoomStatusLabel';
import useConnection, {usePlayerInfo} from '../hooks/useConnection';
import {Button, useBoolean} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useReducer} from 'react';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from '../components/MultiplayerGame';
import useRoomNavigateTo from "../hooks/useRoomNavigateTo";

export default function Room() {
    const {
        canStart,
        startGame,
        canChangeToPlayer,
        changeToPlayer,
        canChangeToSpectator,
        changeToSpectator,
        leaveRoom,
    } = useRoomNavigateTo();

    const {inRoom, isSpectator, playingAs} = usePlayerInfo();

    if (inRoom && [RoomStatus.Started, RoomStatus.Starting].includes(inRoom.status)) {
        return (
            <MultiplayerGame playingAs={playingAs} />
        );
    }

    return inRoom && (
        <div>
            <h1>Room</h1>
            <ul>
                <li><strong>Players:</strong> {inRoom.players}/{inRoom.slots}</li>
                <li><strong>ID:</strong> {inRoom.id}</li>
                <li><strong>Status:</strong> {RoomStatusLabel.get(inRoom.status)}</li>
                <li><strong>Spectators:</strong> {inRoom.spectators}</li>
            </ul>

            {canStart && (
                <Button onClick={startGame}>Start</Button>
            )}

            {canChangeToPlayer && (
                <Button onClick={changeToPlayer}>Join Lobby</Button>
            )}

            { canChangeToSpectator && (
                <Button onClick={changeToSpectator}>Spectate Lobby</Button>
            )}

            <Button onClick={leaveRoom}>Leave Lobby</Button>
        </div>
    );
}
