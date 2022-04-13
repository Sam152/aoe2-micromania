import {io} from 'socket.io-client';
import {createRoot} from 'react-dom/client';
import Lobby from './components/Lobby';
import SlpManager from '../common/drawing/SlpManager';

const connection = io();
const root = createRoot(document.getElementById('ui'));
root.render(<Lobby io={connection} />);


const manager = new SlpManager('/assets');

manager.downloadPreRenderAll();
