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
import useEmittedData from './hooks/useEmittedData';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import { PlayerInfoContext, RoomListContext } from './hooks/useConnection';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Room from './pages/Room';
import TopBar from './components/TopBar';
import SinglePlayerGamePage from './pages/SinglePlayerGame';
import QuickJoin from './pages/QuickJoin';
import Replays from './pages/Replays';
import Replay from './pages/Replay';
import Hotkeys from './pages/Hotkeys';
export default function App() {
    var playerInfo = useEmittedData('playerInfo', {
        inRoom: null,
        isSpectator: null,
        playingAs: null
    });
    var roomList = useEmittedData('listRooms', []);
    return (_jsx(ChakraProvider, __assign({ theme: theme, resetCSS: true }, { children: _jsx(PlayerInfoContext.Provider, __assign({ value: playerInfo }, { children: _jsx(RoomListContext.Provider, __assign({ value: roomList }, { children: _jsxs(BrowserRouter, { children: [_jsx(TopBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Lobby, {}) }), _jsx(Route, { path: "/quick-join", element: _jsx(QuickJoin, {}) }), _jsxs(Route, __assign({ path: "/replays" }, { children: [_jsx(Route, { path: ":replayId", element: _jsx(Replay, {}) }), _jsx(Route, { path: "", element: _jsx(Replays, {}) })] })), _jsxs(Route, __assign({ path: "single-player" }, { children: [_jsx(Route, { path: ":id", element: _jsx(SinglePlayerGamePage, {}) }), _jsx(Route, { path: "", element: _jsx(SinglePlayerGamePage, {}) })] })), _jsx(Route, { path: "room/:roomId", element: _jsx(Room, {}) }), _jsx(Route, { path: "/hotkeys", element: _jsx(Hotkeys, {}) })] })] }) })) })) })));
}
//# sourceMappingURL=App.js.map