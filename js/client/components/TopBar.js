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
import { Box, Flex, HStack, Link, useColorModeValue, } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import EditableNickname from './EditableNickname';
export default function TopBar() {
    var bg = useColorModeValue('gray.100', 'gray.900');
    var linkProps = {
        _activeLink: { backgroundColor: 'blue.900' },
        variant: 'menu-link',
        as: RouterLink
    };
    return (_jsxs(Flex, __assign({ px: 6, bg: bg, alignItems: 'center', id: "nav-bar", sx: { userSelect: 'none' }, justify: 'space-between' }, { children: [_jsxs(HStack, { children: [_jsx(Box, __assign({ mr: 6 }, { children: "MicroMania" })), _jsxs(Flex, { children: [_jsx(Link, __assign({}, linkProps, { to: '/' }, { children: "Lobby Browser" })), _jsx(Link, __assign({}, linkProps, { to: '/replays' }, { children: "Replays" })), _jsx(Link, __assign({}, linkProps, { to: '/single-player' }, { children: "Single Player" })), _jsx(Link, __assign({}, linkProps, { to: '/hotkeys' }, { children: "Hotkeys" }))] })] }), _jsx(EditableNickname, {})] })));
}
//# sourceMappingURL=TopBar.js.map