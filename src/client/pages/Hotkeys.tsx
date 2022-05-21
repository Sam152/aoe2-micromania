import {Container, Heading, Kbd, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useCounter} from "@chakra-ui/react";
import BindSelection from "../components/BindSelection";
import Section from "../components/Section";
import keycodeToHumanReadable from "../../common/util/keycodeToHumanReadable";
import hotkeyManager from "../../common/input/HotkeyManager";
import Hotkey from "../../common/input/Hotkey";
import BindableRow from "../components/BindableRow";

export default function Hotkeys() {

    const counter = useCounter();
    function setBind(hotkey: Hotkey, code: number) {
        hotkeyManager.setBindFor(hotkey, code);
        counter.increment();
    }

    return (
        <Container>
            <Section width='full'>
                <TableContainer>
                    <Table sx={{tableLayout: 'fixed'}}>
                        <Thead>
                            <Tr>
                                <Th >Hotkey name</Th>
                                <Th>Bind</Th>
                                <Th></Th>
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
                                <Td textAlign="right" />
                            </Tr>
                            <Tr>
                                <Td>Move unit(s)</Td>
                                <Td><Kbd>right click</Kbd></Td>
                                <Td textAlign="right" />
                            </Tr>
                            <Tr>
                                <Td>Add waypoint</Td>
                                <Td><Kbd>shift</Kbd> + <Kbd>right click</Kbd></Td>
                                <Td textAlign="right" />
                            </Tr>
                            <Tr>
                                <Td>Patrol units</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.Patrol))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.Patrol, keycode)} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Stop units</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.Stop))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.Stop, keycode)} />
                                </Td>
                            </Tr>

                            <Tr>
                                <Td colSpan={3}>
                                    <Heading size="md">Formations</Heading>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Line formation</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.LineFormation))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.LineFormation, keycode)} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Spread formation</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.SpreadFormation))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.SpreadFormation, keycode)} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Split formation</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.SplitFormation))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.SplitFormation, keycode)} />
                                </Td>
                            </Tr>

                            <Tr>
                                <Td colSpan={3}>
                                    <Heading size="md">Other</Heading>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Delete unit</Td>
                                <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</Kbd></Td>
                                <Td textAlign="right">
                                    <BindSelection onChange={(keycode) => setBind(Hotkey.DeleteUnit, keycode)} />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Delete selected units</Td>
                                <Td ><Kbd>shift</Kbd> + <Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit))}</Kbd></Td>
                                <Td />
                            </Tr>


                            <BindableRow label="Pan up" hotkey={Hotkey.CameraUp} setBind={setBind} />
                            <BindableRow label="Pan down" hotkey={Hotkey.CameraDown} setBind={setBind} />
                            <BindableRow label="Pan left" hotkey={Hotkey.CameraLeft} setBind={setBind} />
                            <BindableRow label="Pan right" hotkey={Hotkey.CameraRight} setBind={setBind} />


                        </Tbody>
                    </Table>
                </TableContainer>
            </Section>
        </Container>
    );
}
