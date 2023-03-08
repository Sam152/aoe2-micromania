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
import { Button, Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr, } from '@chakra-ui/react';
import Section from '../components/Section';
import { Link } from 'react-router-dom';
import humanizeDuration from 'humanize-duration';
import useFetched from '../hooks/useFetched';
export default function Replays() {
    var games = useFetched('/recs/index.json', []);
    return (_jsx(Container, { children: _jsx(Section, __assign({ width: 'full' }, { children: _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "Players" }), _jsx(Th, { children: "Started at" }), _jsx(Th, { children: "Duration" }), _jsx(Th, { width: 1 })] }) }), _jsx(Tbody, { children: games.slice().reverse().map(function (game) { return (_jsxs(Tr, { children: [_jsx(Td, { children: game.players.join(' vs ') }), _jsx(Td, { children: new Date(game.start).toLocaleString() }), _jsx(Td, { children: humanizeDuration(game.end - game.start, { units: ['m', 's'], round: true }) }), _jsx(Td, { children: _jsx(Button, __assign({ as: Link, to: game.id }, { children: "Watch Replay" })) })] }, game.id)); }) })] }) }) })) }));
}
//# sourceMappingURL=Replays.js.map