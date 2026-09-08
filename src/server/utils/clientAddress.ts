import { Socket } from "socket.io";

// In production connections arrive through a proxy, so the socket's own remote address is the
// proxy rather than the client. The left most entry of x-forwarded-for is the original client.
export function clientAddress(socket: Socket): string {
  const forwardedFor = socket.handshake.headers["x-forwarded-for"];
  const forwarded = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  return forwarded?.split(",")[0].trim() || socket.handshake.address;
}
