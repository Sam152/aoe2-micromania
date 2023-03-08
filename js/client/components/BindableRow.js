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
import { Kbd, Td, Tr } from '@chakra-ui/react';
import keycodeToHumanReadable from '../../common/util/keycodeToHumanReadable';
import hotkeyManager from '../../common/input/HotkeyManager';
import BindSelection from './BindSelection';
export default function BindableRow(_a) {
    var setBind = _a.setBind, label = _a.label, hotkey = _a.hotkey;
    return (_jsxs(Tr, { children: [_jsx(Td, { children: label }), _jsx(Td, { children: _jsx(Kbd, { children: keycodeToHumanReadable(hotkeyManager.getBindFor(hotkey)) }) }), _jsx(Td, __assign({ textAlign: "right" }, { children: _jsx(BindSelection, { onChange: function (keycode) { return setBind(hotkey, keycode); } }) }))] }));
}
//# sourceMappingURL=BindableRow.js.map