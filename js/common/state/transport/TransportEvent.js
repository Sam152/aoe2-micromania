var TransportEvent;
(function (TransportEvent) {
    TransportEvent["GameStateActionDispatch"] = "1";
    TransportEvent["GameStateActionTransmit"] = "2";
    TransportEvent["WholeGameStateTransmit"] = "3";
    TransportEvent["CreateRoom"] = "4";
    TransportEvent["JoinRoom"] = "5";
    TransportEvent["SpectateRoom"] = "6";
    TransportEvent["LeaveRoom"] = "7";
    TransportEvent["StartGame"] = "8";
    TransportEvent["SetNickname"] = "9";
    TransportEvent["QuickJoin"] = "10";
})(TransportEvent || (TransportEvent = {}));
export default TransportEvent;
//# sourceMappingURL=TransportEvent.js.map