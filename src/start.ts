import { createServer } from "node:http";
import { Server } from "npm:socket.io";
import { startGame } from "./server/utils/startGame.ts";
import Player from "./server/rooms/Player.ts";
import { logErrors } from "./server/utils/logErrors.ts";
import { bundleClient } from "./serve/bundleClient.ts";
import { createStaticAssetMap } from "./serve/createStaticAssetMap.ts";

logErrors();

const { html, css, js } = await bundleClient();
const staticAssets = {
  ...createStaticAssetMap(),
  "/bundle.js": { contentType: "application/javascript", file: js },
  "/styles.css": { contentType: "text/css", file: css },
  "/index.html": { contentType: "text/html", file: html, noCache: true },
};

const httpServer = createServer(async (req, res) => {
  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

  const asset = staticAssets[pathname];
  if (req.method === "GET" && asset) {
    const headers = {
      "Content-Type": asset.contentType,
    };
    if (asset.noCache) {
      headers["Cache-Control"] = "no-cache";
    }
    res.writeHead(200, headers);
    return res.end(asset.file);
  }

  // All other requests serve the client HTML (historyApiFallback).
  // WebSocket upgrade requests bypass this handler entirely via socket.io.
  res.writeHead(200, { "Content-Type": "text/html", "Cache-Control": "no-cache" });
  res.end(html);
});

const io = new Server(httpServer, { transports: ["websocket"] });
const { registerPlayer } = startGame(io);

io.on("connection", (socket) => {
  const player = new Player(socket);
  registerPlayer(player);
});

const port = parseInt(Deno.env.get("PORT") ?? "3000");
httpServer.listen(port);
console.log(`Server listening on port ${port}`);
