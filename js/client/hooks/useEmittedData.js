import { useEffect, useState } from 'react';
export default function useEmittedData(io, eventName, defaultValue) {
    var _a = useState(defaultValue), state = _a[0], setState = _a[1];
    useEffect(function () {
        io.on(eventName, function (eventData) {
            setState(eventData);
        });
    }, [eventName, io]);
    return state;
}
//# sourceMappingURL=useEmittedData.js.map