import RoomStatusLabel from '../../server/rooms/RoomStatusLabel';
import useConnection, {usePlayerInfo} from "../hooks/useConnection";
import {Button} from "@chakra-ui/react";

export default function Room() {
    const playerInfo = usePlayerInfo();
    const room = playerInfo.inRoom;
    const connection = useConnection();

    return (
        <div>
            <h1>Lobby</h1>
            <ul>
                <li><strong>Players:</strong> {room.players}/{room.slots}</li>
                <li><strong>ID:</strong> {room.id}</li>
                <li><strong>Status:</strong> {RoomStatusLabel.get(room.status)}</li>
                <li><strong>Spectators:</strong> {room.spectators}</li>
            </ul>

            {room.players === room.slots && playerInfo.inRoom && (
                <Button onClick={() => connection.emit('startGame')}>Start</Button>
            )}

            <Button onClick={() => connection.emit('leaveRoom')}>Leave Lobby</Button>
        </div>
    );
}
