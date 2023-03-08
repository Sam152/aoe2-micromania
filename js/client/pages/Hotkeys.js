var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonGroup, Container, Heading, Kbd, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useCounter, VStack, } from '@chakra-ui/react';
import Section from '../components/Section';
import keycodeToHumanReadable from '../../common/util/keycodeToHumanReadable';
import hotkeyManager from '../../common/input/HotkeyManager';
import Hotkey from '../../common/input/Hotkey';
import BindableRow from '../components/BindableRow';
import hdHotkeyScheme from '../../common/input/schemes/hdHotkeyScheme';
import deHotkeyScheme from '../../common/input/schemes/deHotkeyScheme';
import aocHotkeyScheme from '../../common/input/schemes/aocHotkeyScheme';
export default function Hotkeys() {
    var rerender = useCounter();
    function setBind(hotkey, code) {
        hotkeyManager.setBindFor(hotkey, code);
        rerender.increment();
    }
    function clear() {
        hotkeyManager.clearStorage();
        rerender.increment();
    }
    function setScheme(scheme) {
        hotkeyManager.setScheme(scheme);
        rerender.increment();
    }
    return (_jsx(Container, { children: _jsxs(VStack, __assign({ spacing: 4 }, { children: [_jsxs(ButtonGroup, __assign({ justifyContent: "flex-end", width: "full" }, { children: [_jsx(Button, __assign({ onClick: function () { return setScheme(hdHotkeyScheme); } }, { children: "HD Hotkeys" })), _jsx(Button, __assign({ onClick: function () { return setScheme(deHotkeyScheme); } }, { children: "DE Hotkeys" })), _jsx(Button, __assign({ onClick: function () { return setScheme(aocHotkeyScheme); } }, { children: "Classic Hotkeys" })), _jsx(Button, __assign({ variant: 'outline', onClick: clear }, { children: "Reset to default" }))] })), _jsx(Section, __assign({ width: 'full' }, { children: _jsx(TableContainer, { children: _jsxs(Table, __assign({ sx: { tableLayout: 'fixed' } }, { children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Hotkey name" }), _jsx(Th, { children: "Bind" }), _jsx(Th, {})] }) }), _jsxs(Tbody, { children: [_jsx(Tr, { children: _jsx(Td, __assign({ colSpan: 3 }, { children: _jsx(Heading, __assign({ size: "md" }, { children: "Movement" })) })) }), _jsxs(Tr, { children: [_jsx(Td, { children: "Select units" }), _jsxs(Td, { children: [_jsx(Kbd, { children: "left click" }), " / ", _jsx(Kbd, { children: "left click" }), " + ", _jsx(Kbd, { children: "drag" })] }), _jsx(Td, { textAlign: "right" })] }), _jsxs(Tr, { children: [_jsx(Td, { children: "Move unit(s)" }), _jsx(Td, { children: _jsx(Kbd, { children: "right click" }) }), _jsx(Td, { textAlign: "right" })] }), _jsxs(Tr, { children: [_jsx(Td, { children: "Add waypoint" }), _jsxs(Td, { children: [_jsx(Kbd, { children: "shift" }), " + ", _jsx(Kbd, { children: "right click" })] }), _jsx(Td, { textAlign: "right" })] }), _jsx(BindableRow, { label: "Patrol units", hotkey: Hotkey.Patrol, setBind: setBind }), _jsx(BindableRow, { label: "Stop units", hotkey: Hotkey.Stop, setBind: setBind }), _jsx(Tr, { children: _jsx(Td, __assign({ colSpan: 3 }, { children: _jsx(Heading, __assign({ size: "md" }, { children: "Formations" })) })) }), _jsx(BindableRow, { label: "Line formation", hotkey: Hotkey.LineFormation, setBind: setBind }), _jsx(BindableRow, { label: "Spread formation", hotkey: Hotkey.SpreadFormation, setBind: setBind }), _jsx(BindableRow, { label: "Split formation", hotkey: Hotkey.SplitFormation, setBind: setBind }), _jsx(Tr, { children: _jsx(Td, __assign({ colSpan: 3 }, { children: _jsx(Heading, __assign({ size: "md" }, { children: "Other" })) })) }), _jsx(BindableRow, { label: "Delete unit", hotkey: Hotkey.DeleteUnit, setBind: setBind }), _jsxs(Tr, { children: [_jsx(Td, { children: "Delete selected units" }), _jsxs(Td, { children: [_jsx(Kbd, { children: "shift" }), " + ", _jsx(Kbd, { children: keycodeToHumanReadable(hotkeyManager.getBindFor(Hotkey.DeleteUnit)) })] }), _jsx(Td, {})] }), _jsx(BindableRow, { label: "Pan up", hotkey: Hotkey.CameraUp, setBind: setBind }), _jsx(BindableRow, { label: "Pan down", hotkey: Hotkey.CameraDown, setBind: setBind }), _jsx(BindableRow, { label: "Pan left", hotkey: Hotkey.CameraLeft, setBind: setBind }), _jsx(BindableRow, { label: "Pan right", hotkey: Hotkey.CameraRight, setBind: setBind })] })] })) }) }))] })) }));
}
//# sourceMappingURL=Hotkeys.js.map