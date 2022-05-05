import {Socket} from 'socket.io-client';
import {EmittedRoom} from '../../types';
import roomStatusLabel from '../../server/rooms/RoomStatusLabel';
import RoomStatus from '../../server/rooms/RoomStatus';
import {Button} from "@chakra-ui/react";

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
                            <Button disabled={!room.joinable} onClick={() => io.emit('joinRoom', room.id)}>Join</Button>
                            <Button onClick={() => io.emit('spectateRoom', room.id)}>Spectate</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
