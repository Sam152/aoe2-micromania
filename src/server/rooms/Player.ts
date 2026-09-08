import { Socket } from "socket.io";
import { defaultNickname } from "../../common/social/defaultNickname.ts";
import { clientAddress } from "../utils/clientAddress.ts";

export class Player {
  public socket: Socket;
  nickname: string;
  ipAddress: string;

  constructor(socket: Socket) {
    this.socket = socket;
    this.nickname = defaultNickname(this.socket.id);
    this.ipAddress = clientAddress(this.socket);
  }

  setNickname(nickname: string): void {
    if (nickname.length > 1) {
      this.nickname = nickname.substring(0, 25);
    }
  }

  getNickname(): string {
    return this.nickname;
  }

  getIpAddress(): string {
    return this.ipAddress;
  }
}
