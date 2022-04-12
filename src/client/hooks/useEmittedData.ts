import {useEffect, useState} from "react";
import {Socket} from "socket.io-client";

export default function useEmittedData<T>(io: Socket, eventName: string, defaultValue: T) {
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        io.on(eventName, (eventData) => {
            setState(eventData);
        });
    }, [eventName, io]);

    return state;
}
