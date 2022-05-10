import useLobbyNavigation from "../hooks/useLobbyNavigation";
import TransportEvent from "../../common/state/transport/TransportEvent";
import {useEffect} from "react";

export default function QuickJoin() {
    const roomNavigate = useLobbyNavigation();

    useEffect(() => {
        roomNavigate(TransportEvent.QuickJoin);
    }, []);

    return (<></>);
}
