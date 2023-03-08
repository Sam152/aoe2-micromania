import React, { useContext } from 'react';
export var ConnectionContext = React.createContext(null);
export default function useConnection() {
    return useContext(ConnectionContext);
}
export var PlayerInfoContext = React.createContext(null);
export function usePlayerInfo() {
    return useContext(PlayerInfoContext);
}
export var RoomListContext = React.createContext(null);
export function useRoomList() {
    return useContext(RoomListContext);
}
//# sourceMappingURL=useConnection.js.map