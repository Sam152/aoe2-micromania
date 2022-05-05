
import RoomList from '../components/RoomList';
import {useEffect} from 'react';
import {Button, Container} from '@chakra-ui/react';
import useConnection, {usePlayerInfo, useRoomList} from '../hooks/useConnection';
import {useNavigate} from 'react-router-dom';

export default function Lobby() {
    const io = useConnection();

    const playerInfo = usePlayerInfo();
    const roomList = useRoomList();
    const navigate = useNavigate();

    useEffect(() => {
        if (playerInfo.inRoom) {
            navigate(`/room/${playerInfo.inRoom.id}`);
        }
    }, [playerInfo]);

    return (
        <>
            <Container>
                <Button onClick={() => io.emit('createRoom')}>Create Room</Button>
                <RoomList io={io} roomList={roomList}/>
            </Container>
        </>
    );
}
