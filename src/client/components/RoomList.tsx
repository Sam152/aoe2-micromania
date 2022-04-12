import {Socket} from 'socket.io-client';
import {EmittedRoom} from '../../types';
import roomStatusLabel from '../../common/rooms/RoomStatusLabel';
import RoomStatus from '../../common/rooms/RoomStatus';

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

                {roomList.map((room) => (
                    <tr key={room.id}>
                        <td>{room.id}</td>
                        <td>{roomStatusLabel.get(room.status)}</td>
                        <td>{room.players}/{room.slots}</td>
                        <td>{room.spectators}</td>
                        <td>
                            <button disabled={room.status !== RoomStatus.Gathering || room.players == room.slots} onClick={() => io.emit('joinRoom', room.id)}>Join</button>
                            <button onClick={() => io.emit('spectateRoom', room.id)}>Spectate</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
