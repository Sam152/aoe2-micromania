import {io} from 'socket.io-client';
import {createRoot} from 'react-dom/client';
import Lobby from './components/Lobby';
import { ChakraProvider } from '@chakra-ui/react'

const config = {
    transports: ['websocket'],
};
const connection = window.location.hostname === 'localhost' ? io(config) : io(`wss://${window.location.hostname}:3000`, config);
const root = createRoot(document.getElementById('ui'));

root.render(
    <ChakraProvider resetCSS={true}>
        <Lobby io={connection} />
    </ChakraProvider>
);
