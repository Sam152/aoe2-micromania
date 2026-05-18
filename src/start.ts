import { createServer } from "node:http";
import { Server } from "socket.io";
import { startGame } from "./server/utils/startGame.ts";
import Player from "./server/rooms/Player.ts";
import { logErrors } from "./server/utils/logErrors.ts";
import { bundleClient } from "./bundle/bundleClient.ts";
import { createStaticAssetMap, StaticAssetMap } from "./bundle/createStaticAssetMap.ts";

logErrors();

// Static assets are a combination of bundled code and assets on disk.
const { html, css, js } = await bundleClient();
const staticAssets: StaticAssetMap = {
  ...createStaticAssetMap(),
  "/bundle.js": { contentType: "application/javascript", file: js },
  "/styles.css": { contentType: "text/css", file: css },
};

const httpServer = createServer(async (req, res) => {
  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

  const staticAsset = staticAssets[pathname];
  if (req.method === "GET" && staticAsset) {
    const headers = {
      "Content-Type": staticAsset.contentType,
    };
    res.writeHead(200, headers);
    return res.end(staticAsset.file);
  }

  res.writeHead(200, {
    "Content-Type": "text/html",
    "Cache-Control": "no-cache",
  });
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
