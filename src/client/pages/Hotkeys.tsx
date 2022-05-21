import {
    Button,
    ButtonGroup,
    Container,
    Heading,
    Kbd,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useCounter, VStack
} from "@chakra-ui/react";
import Section from "../components/Section";
import keycodeToHumanReadable from "../../common/util/keycodeToHumanReadable";
import hotkeyManager from "../../common/input/HotkeyManager";
import Hotkey from "../../common/input/Hotkey";
import BindableRow from "../components/BindableRow";

export default function Hotkeys() {

    const rerender = useCounter();
    function setBind(hotkey: Hotkey, code: number) {
        hotkeyManager.setBindFor(hotkey, code);
        rerender.increment();
    }

    function clear() {
        hotkeyManager.clearStorage();
        rerender.increment();
    }

    return (
        <Container>
            <VStack spacing={4}>
                <ButtonGroup justifyContent="flex-end" width="full">
                    <Button onClick={() => null}>HD Hotkeys</Button>
                    <Button onClick={() => null}>DE Hotkeys</Button>
                    <Button onClick={() => null}>AoC Hotkeys</Button>
                    <Button variant='outline' onClick={clear}>Reset to default</Button>
                </ButtonGroup>

                <Section width='full'>
                    <TableContainer>
                        <Table sx={{tableLayout: 'fixed'}}>
                            <Thead>
                                <Tr>
                                    <Th>Hotkey name</Th>
                                    <Th>Bind</Th>
                                    <Th />
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td colSpan={3}>
                                        <Heading size="md">Movement</Heading>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Select units</Td>
                                    <Td><Kbd>left click</Kbd> / <Kbd>left click</Kbd> + <Kbd>drag</Kbd></Td>
                                    <Td textAlign="right"/>
                                </Tr>
                                <Tr>
                                    <Td>Move unit(s)</Td>
                                    <Td><Kbd>right click</Kbd></Td>
                                    <Td textAlign="right"/>
                                </Tr>
                                <Tr>
                                    <Td>Add waypoint</Td>
                                    <Td><Kbd>shift</Kbd> + <Kbd>right click</Kbd></Td>
                                    <Td textAlign="right"/>
                                </Tr>
                                <BindableRow label="Patrol units" hotkey={Hotkey.Patrol} setBind={setBind}/>
                                <BindableRow label="Stop units" hotkey={Hotkey.Stop} setBind={setBind}/>

                                <Tr>
                                    <Td colSpan={3}>
                                        <Heading size="md">Formations</Heading>
                                    </Td>
                                </Tr>
                                <BindableRow label="Line formation" hotkey={Hotkey.LineFormation} setBind={setBind}/>
                                <BindableRow label="Spread formation" hotkey={Hotkey.SpreadFormation}
                                             setBind={setBind}/>
                                <BindableRow label="Split formation" hotkey={Hotkey.SplitFormation} setBind={setBind}/>

                                <Tr>
                                    <Td colSpan={3}>
                                        <Heading size="md">Other</Heading>
                                    </Td>
                                </Tr>
                                <BindableRow label="Delete unit" hotkey={Hotkey.DeleteUnit} setBind={setBind}/>
                                <Tr>
                                    <Td>Delete selected units</Td>
                                    <Td><Kbd>shift</Kbd> + <Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</Kbd></Td>
                                    <Td/>
                                </Tr>
                                <BindableRow label="Pan up" hotkey={Hotkey.CameraUp} setBind={setBind}/>
                                <BindableRow label="Pan down" hotkey={Hotkey.CameraDown} setBind={setBind}/>
                                <BindableRow label="Pan left" hotkey={Hotkey.CameraLeft} setBind={setBind}/>
                                <BindableRow label="Pan right" hotkey={Hotkey.CameraRight} setBind={setBind}/>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Section>
            </VStack>
        </Container>
    );
}
