import {Socket} from "socket.io-client";
import useEmittedData from "../hooks/useEmittedData";
import {EmittedRoom} from "../../types";
import roomStatusLabel from "../../common/rooms/RoomStatusLabel";

export default function RoomList({io, roomList}: {io: Socket, roomList: EmittedRoom[]}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Players</th>
                    <th>Spectators</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            {roomList.map(room => (
                <tr key={room.id}>
                    <td>{room.id}</td>
                    <td>{roomStatusLabel.get(room.status)}</td>
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
