import {Socket} from 'socket.io-client';
import RoomList from './RoomList';
import useEmittedData from '../hooks/useEmittedData';
import Room from './Room';
import {EmittedPlayerLobbyMetadata, EmittedRoom} from '../../types';
import RoomStatus from '../../server/rooms/RoomStatus';
import MultiplayerGame from './MultiplayerGame';
import {useState} from 'react';
import SinglePlayerGame from './SinglePlayerGame';

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
                    <button onClick={() => io.emit('createRoom')}>Create Room</button>
                    <button onClick={() => setPlayingSinglePlayer(true)}>Start Single Player</button>
                    <RoomList io={io} roomList={roomList}/>
                </>
            )}
        </div>
    );
}
