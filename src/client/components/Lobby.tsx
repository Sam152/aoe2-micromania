import {Socket} from "socket.io-client";
import RoomList from "./RoomList";
import useEmittedData from "../hooks/useEmittedData";
import Room from "./Room";
import {EmittedPlayerLobbyMetadata, EmittedRoom} from "../../types";
import RoomStatus from "../../common/rooms/RoomStatus";
import MultiplayerGame from "./MultiplayerGame";

export default function Lobby({io}: {io: Socket}) {
    const playerInfo = useEmittedData<EmittedPlayerLobbyMetadata>(io, 'playerInfo', { inRoom: null, isSpectator: null });
    const roomList = useEmittedData<EmittedRoom[]>(io, 'listRooms', []);

    console.log(playerInfo);

    return (
        <div>
            {playerInfo.inRoom ? (
                <>
                    {playerInfo.inRoom.status === RoomStatus.Gathering && (
                        <Room io={io} playerInfo={playerInfo} />
                    )}
                    {playerInfo.inRoom.status === RoomStatus.Started && (
                        <MultiplayerGame io={io} />
                    )}
                </>
            ) : (
                <>
                    <button onClick={() => io.emit('createRoom')}>Create Room</button>
                    <RoomList io={io} roomList={roomList} />
                </>
            )}
        </div>
    )
}
