import RoomStatusLabel from '../../server/rooms/RoomStatusLabel';
import useConnection, {usePlayerInfo} from '../hooks/useConnection';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Skeleton, Square,
    Stack,
    Table,
    TableContainer, Tbody,
    Td, Th, Thead,
    Tr
} from '@chakra-ui/react';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from '../components/MultiplayerGame';
import useRoomNavigation from "../hooks/useRoomNavigation";
import Section from "../components/Section";
import {BiDoorOpen, BsArrowLeft, BsArrowRight, BsEye, BsGear, BsHouseDoor, BsThreeDots} from "react-icons/all";
import {Icon} from "@chakra-ui/icons";
import arrayOfSize from "../../common/util/arrayOfSize";

export default function Room() {
    const {
        canStart,
        startGame,
        canChangeToPlayer,
        changeToPlayer,
        canChangeToSpectator,
        changeToSpectator,
        leaveRoom,
    } = useRoomNavigation();

    const {inRoom, isSpectator, playingAs} = usePlayerInfo();

    if (inRoom && [RoomStatus.Started, RoomStatus.Starting].includes(inRoom.status)) {
        return (
            <MultiplayerGame playingAs={playingAs}/>
        );
    }

    return inRoom && (
        <Container>
            <HStack spacing={4} alignItems='start'>
                <Stack width='70%'>
                    <Section>
                        <TableContainer>
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th width={1}>Slot</Th>
                                        <Th width={1}></Th>
                                        <Th>Player</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {arrayOfSize(inRoom.slots).map(slot => {
                                        const player = inRoom.playersList[slot] || null;
                                        return (
                                            <Tr key={slot}>
                                                <Td>{slot + 1}</Td>
                                                <Td><Square size={'20px'} bg={`playerColors.${slot}`}/></Td>
                                                <Td>{player ? player.name : <Skeleton w={'300px'} h={4}/>}</Td>
                                            </Tr>
                                        );
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Section>

                    <Flex justifyContent='space-between'>
                        <Button disabled={!canStart} onClick={startGame}>Start Game</Button>
                        <Button leftIcon={<Icon as={BiDoorOpen}/>} variant="outline" onClick={leaveRoom}>Exit
                            Lobby</Button>
                    </Flex>
                </Stack>

                <Stack>
                    <Button disabled={!canChangeToPlayer} onClick={changeToPlayer} leftIcon={<Icon as={BsArrowLeft}/>}>Join
                        Game</Button>
                    <Button disabled={!canChangeToSpectator} onClick={changeToSpectator}
                            rightIcon={<Icon as={BsArrowRight}/>}>Spectate</Button>
                </Stack>
                <Section width='30%' padding={3}>
                    <Stack>
                        <HStack>
                            <Icon as={BsEye}/>
                            <Heading as='h3' size='md'>{inRoom.spectators} Spectators</Heading>
                        </HStack>
                        <HStack>
                            <Icon as={BsGear}/>
                            <Heading as='h3' size='md'>{RoomStatusLabel.get(inRoom.status)}</Heading>
                        </HStack>
                    </Stack>
                </Section>
            </HStack>
        </Container>
    );
}
