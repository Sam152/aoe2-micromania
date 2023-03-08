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
import RoomStatusLabel from '../../server/rooms/RoomStatusLabel';
import { usePlayerInfo } from '../hooks/useConnection';
import { Button, Center, Container, Flex, Heading, HStack, Skeleton, Square, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, } from '@chakra-ui/react';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from '../components/MultiplayerGame';
import useRoomNavigation from '../hooks/useRoomNavigation';
import Section from '../components/Section';
import { BiDoorOpen, BsArrowLeft, BsArrowRight, BsEye, BsGear } from 'react-icons/all';
import { Icon } from '@chakra-ui/icons';
import arrayOfSize from '../../common/util/arrayOfSize';
export default function Room() {
    var _a = useRoomNavigation(), canStart = _a.canStart, startGame = _a.startGame, canChangeToPlayer = _a.canChangeToPlayer, changeToPlayer = _a.changeToPlayer, canChangeToSpectator = _a.canChangeToSpectator, changeToSpectator = _a.changeToSpectator, leaveRoom = _a.leaveRoom;
    var _b = usePlayerInfo(), inRoom = _b.inRoom, isSpectator = _b.isSpectator, playingAs = _b.playingAs;
    if (inRoom && [RoomStatus.Started, RoomStatus.Starting, RoomStatus.Completed].includes(inRoom.status)) {
        return (_jsx(MultiplayerGame, { playingAs: playingAs }));
    }
    return inRoom && (_jsx(Container, { children: _jsxs(HStack, __assign({ spacing: 4, alignItems: 'start' }, { children: [_jsxs(Stack, __assign({ width: '70%' }, { children: [_jsx(Section, { children: _jsx(TableContainer, { children: _jsxs(Table, { children: [_jsx(Thead, { children: _jsxs(Tr, { children: [_jsx(Th, __assign({ width: 1 }, { children: "Slot" })), _jsx(Th, { width: 1 }), _jsx(Th, { children: "Player" })] }) }), _jsx(Tbody, { children: arrayOfSize(inRoom.slots).map(function (slot) {
                                                var player = inRoom.playersList[slot] || null;
                                                return (_jsxs(Tr, { children: [_jsx(Td, { children: _jsx(Center, { children: slot + 1 }) }), _jsx(Td, { children: _jsx(Square, { size: '20px', bg: "playerColors.".concat(slot) }) }), _jsx(Td, { children: player ? player.name : _jsx(Skeleton, { w: '300px', h: 4 }) })] }, slot));
                                            }) })] }) }) }), _jsxs(Flex, __assign({ justifyContent: 'space-between' }, { children: [_jsx(Button, __assign({ disabled: !canStart, onClick: startGame }, { children: "Start Game" })), _jsx(Button, __assign({ leftIcon: _jsx(Icon, { as: BiDoorOpen }), variant: "outline", onClick: leaveRoom }, { children: "Exit Lobby" }))] }))] })), _jsxs(Stack, { children: [_jsx(Button, __assign({ disabled: !canChangeToPlayer, onClick: changeToPlayer, leftIcon: _jsx(Icon, { as: BsArrowLeft }) }, { children: "Join Game" })), _jsx(Button, __assign({ disabled: !canChangeToSpectator, onClick: changeToSpectator, rightIcon: _jsx(Icon, { as: BsArrowRight }) }, { children: "Spectate" }))] }), _jsx(Section, __assign({ width: '30%', padding: 3 }, { children: _jsxs(Stack, { children: [_jsxs(HStack, { children: [_jsx(Icon, { as: BsEye }), _jsxs(Heading, __assign({ as: 'h3', size: 'md' }, { children: [inRoom.spectators, " Spectators"] }))] }), _jsxs(HStack, { children: [_jsx(Icon, { as: BsGear }), _jsx(Heading, __assign({ as: 'h3', size: 'md' }, { children: RoomStatusLabel.get(inRoom.status) }))] })] }) }))] })) }));
}
//# sourceMappingURL=Room.js.map