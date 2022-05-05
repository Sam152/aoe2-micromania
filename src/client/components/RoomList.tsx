import {Socket} from 'socket.io-client';
import {EmittedRoom} from '../../types';
import roomStatusLabel from '../../server/rooms/RoomStatusLabel';
import {Button, Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {useEffect, useReducer} from "react";
import {usePlayerInfo} from "../hooks/useConnection";
import {useNavigate} from "react-router-dom";

export default function RoomList({io, roomList}: {io: Socket, roomList: EmittedRoom[]}) {

    const navigate = useNavigate();
    const [isEntering, enterRoom] = useReducer(() => true, false);
    const playerInfo = usePlayerInfo();

    useEffect(() => {
        if (isEntering && playerInfo.inRoom) {
            navigate(`/room/${playerInfo.inRoom.id}`);
        }
    }, [playerInfo, isEntering]);

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
                            <Button disabled={!room.joinable} onClick={() => {
                                io.emit('joinRoom', room.id);
                                // enterRoom();
                            }}>Join</Button>
                            <Button onClick={() => {
                                io.emit('spectateRoom', room.id);
                                enterRoom();
                            }}>Spectate</Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
