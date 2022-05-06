import {Socket} from 'socket.io';

export default class Player {
    public socket: Socket;
    nickname: string;

    constructor(socket: Socket) {
        this.socket = socket;
    }

    setNickname(nickname: string): void {
        this.nickname = nickname;
    }

    getNickname(): string {
        return this.nickname || 'Default Nick';
    }
}
