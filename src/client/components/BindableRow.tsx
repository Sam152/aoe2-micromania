import {Kbd, Td, Tr} from '@chakra-ui/react';
import keycodeToHumanReadable from '../../common/util/keycodeToHumanReadable';
import hotkeyManager from '../../common/input/HotkeyManager';
import Hotkey from '../../common/input/Hotkey';
import BindSelection from './BindSelection';

export default function BindableRow({
    setBind,
    label,
    hotkey,
}: {
    setBind: (hotkey: Hotkey, code: number) => void,
    label: string,
    hotkey: number,
}) {
    return (
        <Tr>
            <Td>{ label }</Td>
            <Td><Kbd>{keycodeToHumanReadable(hotkeyManager.getBindFor(hotkey))}</Kbd></Td>
            <Td textAlign="right">
                <BindSelection onChange={(keycode) => setBind(hotkey, keycode)}/>
            </Td>
        </Tr>
    );
}
