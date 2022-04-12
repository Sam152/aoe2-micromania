import {Socket} from 'socket.io';

export default class Player {
    public socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
    }
}
