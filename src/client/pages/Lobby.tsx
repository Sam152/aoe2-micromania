import {Button, Container, Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {useRoomList} from '../hooks/useConnection';
import Section from "../components/Section";
import roomStatusLabel from "../../server/rooms/RoomStatusLabel";
import useRoomNavigateTo from "../hooks/useRoomNavigateTo";

export default function Lobby() {
    const roomList = useRoomList();
    const roomNavigate = useRoomNavigateTo();

    return (
        <Container>
            <Button onClick={() => roomNavigate('createRoom')}>Create Room</Button>
            <Section>
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
                                    <Button disabled={!room.joinable}
                                            onClick={() => roomNavigate('joinRoom', room.id)}>Join</Button>
                                    <Button onClick={() => roomNavigate('spectateRoom', room.id)}>Spectate</Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

            </Section>
        </Container>
    );
}
