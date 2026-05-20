import { createHash } from "node:crypto";
import { runEsbuild } from "./bundle.ts";

export async function bundleClient() {
  const entrypoint = new URL("../client/index.tsx", import.meta.url).pathname;

  const [html, css, js] = await Promise.all([
    Deno.readTextFile(new URL("../client/template.html", import.meta.url)),
    Deno.readTextFile(new URL("../client/styles.css", import.meta.url)),
    runEsbuild(entrypoint, { jsx: "automatic", jsxImportSource: "react" }),
  ]);

  const htmlWithHashes = html
    .replace("{{ jsHash }}", hash(js))
    .replace("{{ cssHash }}", hash(css));

  return { js, html: htmlWithHashes, css };
}

function hash(input: string) {
  return createHash("md5").update(input).digest("hex");
}
