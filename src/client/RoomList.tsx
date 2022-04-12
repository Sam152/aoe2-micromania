import {Socket} from "socket.io-client";
import useEmittedData from "./hooks/useEmittedData";

export default function RoomList({io}: {io: Socket}) {
    const roomList = useEmittedData(io, 'listRooms', []);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Players</th>
                    <th>Spectators</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            {roomList.map(room => (
                <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{room.players}/{room.slots}</td>
                    <td>{room.spectators}</td>
                    <td>
                        <button onClick={() => io.emit('joinRoom', room.id)}>Join</button>
                        <button onClick={() => io.emit('spectateRoom', room.id)}>Spectate</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
