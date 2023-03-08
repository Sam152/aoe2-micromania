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
import { Box, Button, ButtonGroup, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { BsShieldFill } from 'react-icons/all';
import { Icon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import generateId from '../../common/util/generateId';
function Banner(_a) {
    var text = _a.text, buttonText = _a.buttonText, onClick = _a.onClick;
    return (_jsx(Flex, __assign({ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: "center", cursor: 'url("/graphics/interface/0.svg") 0 0, none' }, { children: _jsxs(Stack, __assign({ borderColor: '#e0bf4f', borderBottomWidth: '3px', borderTopWidth: '3px', background: 'rgba(0,0,0,0.7)', spacing: 6, userSelect: 'none', py: 6, w: "full" }, { children: [_jsx(Text, __assign({ align: 'center', textStyle: 'victory' }, { children: text })), _jsxs(HStack, __assign({ justifyContent: "center" }, { children: [_jsx(Box, { width: '200px', borderTopWidth: '3px', borderColor: '#e0bf4f' }), _jsx(Icon, { w: 6, h: 6, color: '#e0bf4f', as: BsShieldFill }), _jsx(Box, { width: '200px', borderTopWidth: '3px', borderColor: '#e0bf4f' })] })), _jsx(ButtonGroup, __assign({ justifyContent: 'center' }, { children: _jsx(Button, __assign({ onClick: onClick, cursor: 'url("/graphics/interface/0.svg") 0 0, none', variant: 'inGame' }, { children: buttonText })) }))] })) })));
}
export function VictoryBanner() {
    var navigate = useNavigate();
    return _jsx(Banner, { text: 'You are victorious!', buttonText: 'Join another', onClick: function () { return navigate('/quick-join'); } });
}
export function DefeatBanner() {
    var navigate = useNavigate();
    return _jsx(Banner, { text: 'You have been defeated!', buttonText: 'Join another', onClick: function () { return navigate('/quick-join'); } });
}
export function SinglePlayerVictoryBanner() {
    var navigate = useNavigate();
    var id = generateId(6);
    return _jsx(Banner, { text: 'You are victorious!', buttonText: 'Play again', onClick: function () { return navigate("/single-player/".concat(id)); } });
}
export function SinglePlayerDefeatBanner() {
    var navigate = useNavigate();
    var id = generateId(6);
    return _jsx(Banner, { text: 'You have been defeated!', buttonText: 'Play again', onClick: function () { return navigate("/single-player/".concat(id)); } });
}
//# sourceMappingURL=VictoryBanner.js.map