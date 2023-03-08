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
import { Button, ButtonGroup, Center, Container, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack, } from '@chakra-ui/react';
import { useRoomList } from '../hooks/useConnection';
import Section from '../components/Section';
import roomStatusLabel from '../../server/rooms/RoomStatusLabel';
import useLobbyNavigation from '../hooks/useLobbyNavigation';
import TransportEvent from '../../common/state/transport/TransportEvent';
export default function Lobby() {
    var roomList = useRoomList();
    var roomNavigate = useLobbyNavigation();
    return (_jsx(Container, { children: _jsxs(VStack, __assign({ spacing: 4 }, { children: [_jsxs(ButtonGroup, { children: [_jsx(Button, __assign({ size: 'lg', onClick: function () { return roomNavigate(TransportEvent.QuickJoin); } }, { children: "Quick Join" })), _jsx(Button, __assign({ variant: 'outline', size: 'lg', onClick: function () { return roomNavigate(TransportEvent.CreateRoom); } }, { children: "Create Room" }))] }), _jsx(Section, __assign({ width: 'full' }, { children: _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, { children: "ID" }), _jsx(Th, { children: "Status" }), _jsx(Th, { children: "Players" }), _jsx(Th, { children: "Spectators" }), _jsx(Th, { width: 1 })] }) }), _jsxs(Tbody, { children: [roomList.length === 0 && (_jsx(Tr, { children: _jsx(Td, __assign({ colSpan: 5 }, { children: _jsx(Center, { children: "There are no active lobbies." }) })) })), roomList.map(function (room) { return (_jsxs(Tr, { children: [_jsx(Td, { children: room.id }), _jsx(Td, { children: roomStatusLabel.get(room.status) }), _jsxs(Td, { children: [room.players, "/", room.slots] }), _jsx(Td, { children: room.spectators }), _jsx(Td, { children: _jsxs(ButtonGroup, __assign({ width: 'full', justifyContent: 'flex-end' }, { children: [_jsx(Button, __assign({ disabled: !room.joinable, onClick: function () { return roomNavigate(TransportEvent.JoinRoom, room.id); } }, { children: "Join" })), _jsx(Button, __assign({ variant: 'outline', onClick: function () { return roomNavigate(TransportEvent.SpectateRoom, room.id); } }, { children: "Spectate" }))] })) })] }, room.id)); })] })] }) }) }))] })) }));
}
//# sourceMappingURL=Lobby.js.map