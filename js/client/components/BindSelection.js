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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
export default function BindSelection(_a) {
    var onChange = _a.onChange;
    var _b = useState(false), listening = _b[0], setListening = _b[1];
    useEffect(function () {
        if (!listening) {
            return;
        }
        window.addEventListener('keydown', function listener(e) {
            e.preventDefault();
            onChange(e.keyCode);
            setListening(false);
            window.removeEventListener('keydown', listener);
        });
    }, [listening]);
    return (_jsx(Button, __assign({ onClick: function () { return setListening(true); } }, { children: listening ? 'Listening...' : 'Rebind' })));
}
//# sourceMappingURL=BindSelection.js.map