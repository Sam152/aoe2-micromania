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
    Tr, VStack
} from '@chakra-ui/react';
import {useRoomList} from '../hooks/useConnection';
import Section from "../components/Section";
import roomStatusLabel from "../../server/rooms/RoomStatusLabel";
import useLobbyNavigation from "../hooks/useLobbyNavigation";
import TransportEvent from "../../common/state/transport/TransportEvent";

export default function Lobby() {
    const roomList = useRoomList();
    const roomNavigate = useLobbyNavigation();

    return (
        <Container>
            <VStack spacing={4}>
                <ButtonGroup>
                    <Button size='lg' onClick={() => roomNavigate(TransportEvent.CreateRoom)}>Quick Join</Button>
                    <Button variant='outline' size='lg' onClick={() => roomNavigate(TransportEvent.CreateRoom)}>Create Room</Button>
                </ButtonGroup>
                <Section width='full'>
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
                                                        onClick={() => roomNavigate(TransportEvent.JoinRoom, room.id)}>Join</Button>
                                                <Button variant='outline'
                                                        onClick={() => roomNavigate(TransportEvent.SpectateRoom, room.id)}>Spectate</Button>
                                            </ButtonGroup>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Section>
            </VStack>
        </Container>
    );
}
