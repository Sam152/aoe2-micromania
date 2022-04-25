import {io} from 'socket.io-client';
import {createRoot} from 'react-dom/client';
import Lobby from './components/Lobby';

const connection = io(`wss://${window.location.hostname}:3000`, {
    transports: ['websocket'],
});
const root = createRoot(document.getElementById('ui'));
root.render(<Lobby io={connection} />);
