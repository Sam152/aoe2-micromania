import {useCallback, useEffect, useReducer} from "react";
import useConnection, {usePlayerInfo, useRoomList} from "./useConnection";
import {useNavigate} from "react-router-dom";

export default function useLobbyNavigateTo() {
    const io = useConnection();

    const playerInfo = usePlayerInfo();
    const navigate = useNavigate();

    const [isEnteringRoom, enterRoom] = useReducer(() => true, false);
    useEffect(() => {
        if (isEnteringRoom && playerInfo.inRoom) {
            navigate(`/room/${playerInfo.inRoom.id}`);
        } else if (playerInfo.inRoom) {
            io.emit('leaveRoom');
        }
    }, [playerInfo]);

    const emitAndEnter = useCallback((action: string, args: any = null): void => {
        io.emit(action, args);
        enterRoom();
    }, []);

    return emitAndEnter;
}
