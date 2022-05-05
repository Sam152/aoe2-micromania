import {Socket} from 'socket.io-client';
import {EmittedRoom} from '../../types';
import roomStatusLabel from '../../server/rooms/RoomStatusLabel';
import {Button, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export default function RoomList({io, roomList}: {io: Socket, roomList: EmittedRoom[]}) {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Status</Th>
                    <Th>Players</Th>
                    <Th>Spectators</Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>

                {roomList.map((room) => (
                    <Tr key={room.id}>
                        <Td>{room.id}</Td>
                        <Td>{roomStatusLabel.get(room.status)}</Td>
                        <Td>{room.players}/{room.slots}</Td>
                        <Td>{room.spectators}</Td>
                        <Td>
                            <Button disabled={!room.joinable} onClick={() => io.emit('joinRoom', room.id)}>Join</Button>
                            <Button onClick={() => io.emit('spectateRoom', room.id)}>Spectate</Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
