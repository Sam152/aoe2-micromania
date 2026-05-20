import { Socket } from "socket.io";
import { defaultNickname } from "../../common/social/defaultNickname.ts";

export class Player {
  public socket: Socket;
  nickname: string;

  constructor(socket: Socket) {
    this.socket = socket;
    this.nickname = defaultNickname(this.socket.id);
  }

  setNickname(nickname: string): void {
    if (nickname.length > 1) {
      this.nickname = nickname.substring(0, 25);
    }
  }

  getNickname(): string {
    return this.nickname;
  }
}
