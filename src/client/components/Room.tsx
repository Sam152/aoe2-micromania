import {Socket} from "socket.io-client";
import {EmittedPlayerLobbyMetadata, EmittedRoom} from "../../types";
import RoomStatus from "../../common/rooms/RoomStatus";
import RoomStatusLabel from "../../common/rooms/RoomStatusLabel";

export default function Room({io, playerInfo}: {io: Socket, playerInfo: EmittedPlayerLobbyMetadata}) {
    const room = playerInfo.inRoom;

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
                <button onClick={() => io.emit('startGame')}>Start</button>
            )}

            <button onClick={() => io.emit('leaveRoom')}>Leave Lobby</button>
        </div>
    )
}
