import {useEffect, useState} from 'react';
import useConnection from './useConnection';

export default function useEmittedData<T>(eventName: string, defaultValue: T) {
    const io = useConnection();
    const [state, setState] = useState<T>(defaultValue);

    useEffect(() => {
        io.on(eventName, (eventData) => {
            setState(eventData);
        });
    }, [eventName, io]);

    return state;
}
