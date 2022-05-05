import {Socket} from 'socket.io-client';
import RoomList from './RoomList';
import useEmittedData from '../hooks/useEmittedData';
import Room from './Room';
import {EmittedPlayerLobbyMetadata, EmittedRoom} from '../../types';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from './MultiplayerGame';
import {useState} from 'react';
import SinglePlayerGame from './SinglePlayerGame';
import {Button} from "@chakra-ui/react";

export default function Lobby({io}: { io: Socket }) {
    // return (<SinglePlayerGame />);

    const playerInfo = useEmittedData<EmittedPlayerLobbyMetadata>(io, 'playerInfo', {inRoom: null, isSpectator: null, playingAs: null});
    const roomList = useEmittedData<EmittedRoom[]>(io, 'listRooms', []);

    const [playingSinglePlayer, setPlayingSinglePlayer] = useState(false);

    return (
        <div>
            {playerInfo.inRoom ? (
                <>
                    {playerInfo.inRoom.status === RoomStatus.Gathering && (
                        <Room io={io} playerInfo={playerInfo}/>
                    )}
                    {playerInfo.inRoom.status === RoomStatus.Started && (
                        <MultiplayerGame io={io} playingAs={playerInfo.playingAs} />
                    )}
                </>
            ) : playingSinglePlayer ? (
                <SinglePlayerGame/>
            ) : (
                <>
                    <Button onClick={() => io.emit('createRoom')}>Create Room</Button>
                    <Button onClick={() => setPlayingSinglePlayer(true)}>Start Single Player</Button>
                    <RoomList io={io} roomList={roomList}/>
                </>
            )}
        </div>
    );
}
