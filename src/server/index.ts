import { createServer as createServerHttps } from "https";
import { createServer as createServerHttp } from "http";
import { Server } from "socket.io";
import Player from "./rooms/Player";
import * as fs from "fs";
import { startGame } from "./utils/startGame";

const httpServer =
  process.env.KEY_FILE && process.env.CERT_FILE
    ? createServerHttps({
        key: fs.readFileSync(process.env.KEY_FILE),
        cert: fs.readFileSync(process.env.CERT_FILE),
      })
    : createServerHttp();

const io = new Server(httpServer, {
  transports: ["websocket"],
});
httpServer.on("request", (req, res) => {
  if (req.method === "GET" && req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("1");
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const { registerPlayer } = startGame(io);

io.on("connection", (socket) => {
  const player = new Player(socket);
  registerPlayer(player);
});

httpServer.listen(process.env.PORT || 3000);
console.log(`Server listening on port ${process.env.PORT || 3000}`);
