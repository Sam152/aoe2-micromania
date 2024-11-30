import React, {useContext} from 'react';
import {Socket} from 'socket.io-client';

export const ConnectionContext = React.createContext(null);
export default function useConnection(): Socket {
    return useContext<Socket>(ConnectionContext);
}
