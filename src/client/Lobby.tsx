import {Socket} from "socket.io-client";
import RoomList from "./RoomList";
import {useEffect} from "react";
import useEmittedData from "./hooks/useEmittedData";

export default function Lobby({io}: {io: Socket}) {

    const playerInfo = useEmittedData(io, 'playerInfo', {});

    console.log(playerInfo);

    return (
        <div>
            <button onClick={() => io.emit('createRoom')}>Create Room</button>
            <RoomList io={io} />
        </div>
    )
}
