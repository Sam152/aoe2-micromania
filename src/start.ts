import { createServer } from "node:http";
import { Server } from "npm:socket.io";
import * as esbuild from "npm:esbuild";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader";
import { startGame } from "./server/utils/startGame.ts";
import Player from "./server/rooms/Player.ts";
import { logErrors } from "./server/utils/logErrors.ts";

logErrors();

const port = parseInt(Deno.env.get("PORT") ?? "3000");

console.log("Bundling client...");
const configPath = new URL("../deno.json", import.meta.url).pathname;
const entrypoint = new URL("./client/index.tsx", import.meta.url).pathname;

// esbuild with platform:"browser" externalises bare specifiers that share a
// name with a Node built-in (including "buffer") before deno-loader can
// intercept them. This plugin runs first and redirects them to the npm polyfill
// already present in node_modules.
const nodePolyfillsPlugin: esbuild.Plugin = {
  name: "node-polyfills",
  setup(build) {
    const bufferPath = `${Deno.cwd()}/node_modules/buffer/index.js`;
    build.onResolve({ filter: /^buffer$/ }, () => ({ path: bufferPath }));
  },
};

const bufferShim = new URL("./client/buffer-shim.js", import.meta.url).pathname;

const result = await esbuild.build({
  plugins: [nodePolyfillsPlugin, ...denoPlugins({ configPath })],
  entryPoints: [entrypoint],
  inject: [bufferShim],
  bundle: true,
  format: "esm",
  platform: "browser",
  jsx: "automatic",
  jsxImportSource: "react",
  write: false,
});
const clientBundle = new TextDecoder().decode(result.outputFiles[0].contents);
await esbuild.stop();
console.log("Client bundled.");

const html = await Deno.readTextFile(new URL("./client/template.html", import.meta.url));
const css = await Deno.readTextFile(new URL("./client/styles.css", import.meta.url));

const httpServer = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const pathname = new URL(req.url ?? "/", "http://localhost").pathname;

  if (req.method === "GET" && pathname === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("1");
  }

  if (req.method === "GET" && pathname === "/bundle.js") {
    res.writeHead(200, { "Content-Type": "application/javascript" });
    return res.end(clientBundle);
  }

  if (req.method === "GET" && pathname === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    return res.end(css);
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
