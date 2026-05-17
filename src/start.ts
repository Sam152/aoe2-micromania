import {createServer} from "node:http";
import {Server} from "npm:socket.io";
import {startGame} from "./server/utils/startGame.ts";
import Player from "./server/rooms/Player.ts";
import {logErrors} from "./server/utils/logErrors.ts";
import {bundleClient} from "./serve/bundleClient.ts";

logErrors();

const port = parseInt(Deno.env.get("PORT") ?? "3000");
const { html, css, js } = await bundleClient();
const assetsRoot = new URL("../assets", import.meta.url).pathname;

const MIME_TYPES: Record<string, string> = {
  ogg: "audio/ogg",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  svg: "image/svg+xml",
  pal: "application/octet-stream",
  smx: "application/octet-stream",
  slp: "application/octet-stream",
};

function contentType(pathname: string): string {
  const ext = pathname.split(".").pop()?.toLowerCase() ?? "";
  return MIME_TYPES[ext] ?? "application/octet-stream";
}

const httpServer = createServer(async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  // res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

  if (req.method === "GET" && pathname === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("1");
  }

  if (req.method === "GET" && pathname === "/bundle.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    return res.end(js);
  }

  if (req.method === "GET" && pathname === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    return res.end(css);
  }

  if (req.method === "GET") {
    const assetPath = `${assetsRoot}${pathname}`;
    if (assetPath.startsWith(assetsRoot + "/")) {
      try {
        const data = await Deno.readFile(assetPath);
        res.writeHead(200, { "Content-Type": contentType(pathname) });
        return res.end(data);
      } catch {
        // Not in assets — fall through to HTML.
      }
    }
  }

  // All other requests serve the client HTML (historyApiFallback).
  // WebSocket upgrade requests bypass this handler entirely via socket.io.
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

const io = new Server(httpServer, { transports: ["websocket"] });
const { registerPlayer } = startGame(io);

io.on("connection", (socket) => {
  const player = new Player(socket);
  registerPlayer(player);
});

httpServer.listen(port);
console.log(`Server listening on port ${port}`);
