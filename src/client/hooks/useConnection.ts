import React, {useContext} from 'react';
import {Socket} from 'socket.io-client';
import {EmittedPlayerLobbyMetadata, EmittedRoom} from '../../types';

export const ConnectionContext = React.createContext(null);
export default function useConnection(): Socket {
    return useContext<Socket>(ConnectionContext);
}

export const PlayerInfoContext = React.createContext(null);
export function usePlayerInfo() {
    return useContext<EmittedPlayerLobbyMetadata>(PlayerInfoContext);
}

export const RoomListContext = React.createContext(null);
export function useRoomList() {
    return useContext<EmittedRoom[]>(RoomListContext);
}
