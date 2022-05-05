import useEmittedData from "./hooks/useEmittedData";
import {EmittedPlayerLobbyMetadata, EmittedRoom} from "../types";
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/theme";
import {PlayerInfoContext, RoomListContext} from "./hooks/useConnection";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lobby from "./pages/Lobby";
import SinglePlayerGame from "./pages/SinglePlayerGame";
import React from "react";
import Room from "./pages/Room";


export default function App() {
    const playerInfo = useEmittedData<EmittedPlayerLobbyMetadata>('playerInfo', {
        inRoom: null,
        isSpectator: null,
        playingAs: null
    });
    const roomList = useEmittedData<EmittedRoom[]>('listRooms', []);

    return (
        <ChakraProvider theme={theme} resetCSS={true}>
            <PlayerInfoContext.Provider value={playerInfo}>
                <RoomListContext.Provider value={roomList}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Lobby/>}/>
                            <Route path="single-player" element={<SinglePlayerGame/>}/>
                            <Route path="room/:roomId" element={<Room />}/>
                        </Routes>
                    </BrowserRouter>
                </RoomListContext.Provider>
            </PlayerInfoContext.Provider>
        </ChakraProvider>
    );
}
