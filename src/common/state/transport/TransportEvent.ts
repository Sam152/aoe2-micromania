enum TransportEvent {
    GameStateActionDispatch = '1',
    GameStateActionTransmit = '2',
    WholeGameStateTransmit = '3',

    CreateRoom = '4',
    JoinRoom = '5',
    SpectateRoom = '6',
    LeaveRoom = '7',
    StartGame = '8',
    SetNickname = '9',
    QuickJoin = '10',
}

export default TransportEvent;
