import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import useLobbyNavigation from '../hooks/useLobbyNavigation';
import TransportEvent from '../../common/state/transport/TransportEvent';
import { useEffect } from 'react';
export default function QuickJoin() {
    var roomNavigate = useLobbyNavigation();
    useEffect(function () {
        roomNavigate(TransportEvent.QuickJoin);
    }, []);
    return (_jsx(_Fragment, {}));
}
//# sourceMappingURL=QuickJoin.js.map