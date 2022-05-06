import {
    Button,
    ButtonGroup,
    Container,
    HStack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';
import {useRoomList} from '../hooks/useConnection';
import Section from "../components/Section";
import roomStatusLabel from "../../server/rooms/RoomStatusLabel";
import useLobbyNavigateTo from "../hooks/useLobbyNavigateTo";

export default function Lobby() {
    const roomList = useRoomList();
    const roomNavigate = useLobbyNavigateTo();

    return (
        <Container>
            <Button onClick={() => roomNavigate('createRoom')}>Create Room</Button>
            <Section>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>Status</Th>
                                <Th>Players</Th>
                                <Th>Spectators</Th>
                                <Th width={1}></Th>
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
                                        <ButtonGroup width='full' justifyContent='flex-end'>
                                            <Button disabled={!room.joinable}
                                                    onClick={() => roomNavigate('joinRoom', room.id)}>Join</Button>
                                            <Button variant='outline'
                                                    onClick={() => roomNavigate('spectateRoom', room.id)}>Spectate</Button>
                                        </ButtonGroup>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>

            </Section>
        </Container>
    );
}
