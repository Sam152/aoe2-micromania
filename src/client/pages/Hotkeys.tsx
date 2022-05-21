import {Container, Kbd, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import BindSelection from "../components/BindSelection";
import Section from "../components/Section";
import keycodeToHumanReadable from "../../common/util/keycodeToHumanReadable";
import hotkeyManager from "../../common/input/HotkeyManager";
import Hotkey from "../../common/input/Hotkey";

export default function Hotkeys() {
    return (
        <Container>
            <Section width='full'>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Hotkey name</Th>
                                <Th>Bind</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Delete units</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</Kbd></Td>
                                <Td>
                                    <BindSelection onChange={() => null} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td borderTopWidth={0}>Delete group of units</Td>
                                <Td borderTopWidth={0}><Kbd>shift</Kbd> + <Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</Kbd></Td>
                                <Td borderTopWidth={0} />
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Section>
        </Container>
    );
}
