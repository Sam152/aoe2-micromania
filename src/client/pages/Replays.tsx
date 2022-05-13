import {
    Button,
    Container,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import Section from '../components/Section';
import {ReplayIndexItem} from "../../types";
import {Link} from "react-router-dom";
import humanizeDuration from "humanize-duration";
import useFetched from "../hooks/useFetched";

export default function Replays() {
    const games = useFetched<Array<ReplayIndexItem>>('/recs/index.json', []);

    return (
        <Container>
            <Section width='full'>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Players</Th>
                                <Th>Started at</Th>
                                <Th>Duration</Th>
                                <Th width={1}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {games.map(game => (
                                <Tr>
                                    <Td>{game.players.join(' vs ')}</Td>
                                    <Td>{ new Date(game.start).toLocaleString() }</Td>
                                    <Td>{humanizeDuration(game.end - game.start, {units: ['m', 's'], round: true})}</Td>
                                    <Td><Button as={Link} to={game.id}>Watch Replay</Button></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Section>
        </Container>
    );
}
