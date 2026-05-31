import { createServer } from "node:http";
import { Server } from "socket.io";
import { startGame } from "./server/utils/startGame.ts";
import { Player } from "./server/rooms/Player.ts";
import { logErrors } from "./server/utils/logErrors.ts";
import * as esbuild from "esbuild";
import { bundleClient } from "./bundle/bundleClient.ts";
import { bundleWorker } from "./bundle/bundleWorker.ts";
import { createStaticAssetMap, StaticAssetMap } from "./bundle/createStaticAssetMap.ts";
import { logger } from "./server/logger.ts";

logErrors();

// Static assets are a combination of bundled code and assets on disk.
const [{ html, css, js }, { js: workerJs }] = await Promise.all([bundleClient(), bundleWorker()]);
esbuild.stop();
const staticAssets: StaticAssetMap = {
  ...createStaticAssetMap(),
  "/bundle.js": { contentType: "application/javascript", file: js },
  "/styles.css": { contentType: "text/css", file: css },
  "/renderSmxWorker.js": { contentType: "application/javascript", file: workerJs },
};

const httpServer = createServer(async (req, res) => {
  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

  const staticAsset = staticAssets[pathname];
  if (req.method === "GET" && staticAsset) {
    const headers = {
      "Content-Type": staticAsset.contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
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
logger.info(`Server listening on port ${port}`);
