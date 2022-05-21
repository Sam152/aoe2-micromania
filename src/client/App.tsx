import useEmittedData from './hooks/useEmittedData';
import {EmittedPlayerLobbyMetadata, EmittedRoom} from '../types';
import {Button, ChakraProvider, HStack} from '@chakra-ui/react';
import theme from './theme/theme';
import {PlayerInfoContext, RoomListContext} from './hooks/useConnection';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Lobby from './pages/Lobby';
import React from 'react';
import Room from './pages/Room';
import TopBar from './components/TopBar';
import SinglePlayerGamePage from './pages/SinglePlayerGame';
import QuickJoin from './pages/QuickJoin';
import Replays from './pages/Replays';
import Replay from './pages/Replay';
import Hotkeys from './pages/Hotkeys';

export default function App() {
    const playerInfo = useEmittedData<EmittedPlayerLobbyMetadata>('playerInfo', {
        inRoom: null,
        isSpectator: null,
        playingAs: null,
    });
    const roomList = useEmittedData<EmittedRoom[]>('listRooms', []);

    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <PlayerInfoContext.Provider value={playerInfo}>
                <RoomListContext.Provider value={roomList}>
                    <BrowserRouter>
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Lobby/>}/>
                            <Route path="/quick-join" element={<QuickJoin/>}/>
                            <Route path="/replays">
                                <Route path=":replayId" element={<Replay />} />
                                <Route path="" element={<Replays />} />
                            </Route>
                            <Route path="single-player">
                                <Route path=":id" element={<SinglePlayerGamePage/>}/>
                                <Route path="" element={<SinglePlayerGamePage/>}/>
                            </Route>
                            <Route path="room/:roomId" element={<Room/>}/>
                            <Route path="/hotkeys" element={<Hotkeys />}/>
                        </Routes>
                    </BrowserRouter>
                </RoomListContext.Provider>
            </PlayerInfoContext.Provider>
        </ChakraProvider>
    );
}
