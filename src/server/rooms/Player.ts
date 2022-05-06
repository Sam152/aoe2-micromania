import {Socket} from 'socket.io';
import defaultNickname from "../../common/social/defaultNickname";

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
        return this.nickname || defaultNickname(this.socket.id);
    }
}
