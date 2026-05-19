import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";
import { createHash } from "node:crypto";

export async function bundleClient() {
  const configPath = new URL("../../deno.json", import.meta.url).pathname;
  const entrypoint = new URL("../client/index.tsx", import.meta.url).pathname;

  const nodePolyfillsPlugin: esbuild.Plugin = {
    name: "node-polyfills",
    setup(build) {
      const bufferPath = new URL("../../node_modules/buffer/index.js", import.meta.url).pathname;
      build.onResolve({ filter: /^buffer$/ }, () => ({ path: bufferPath }));
    },
  };

  const [html, css, esbuildResult] = await Promise.all([
    Deno.readTextFile(new URL("../client/template.html", import.meta.url)),
    Deno.readTextFile(new URL("../client/styles.css", import.meta.url)),
    esbuild.build({
      plugins: [nodePolyfillsPlugin, ...(denoPlugins({ configPath }) as esbuild.Plugin[])],
      entryPoints: [entrypoint],
      inject: [new URL("../client/assets/buffer-shim.js", import.meta.url).pathname],
      bundle: true,
      format: "esm",
      platform: "browser",
      jsx: "automatic",
      jsxImportSource: "react",
      write: false,
    }),
  ]);

  // Do not bother awaiting terminating the child process.
  esbuild.stop();

  if (!esbuildResult.outputFiles) {
    throw new Error("No output files in build");
  }

  const js = new TextDecoder().decode(esbuildResult.outputFiles[0].contents);

  const htmlWithHashes = html
    .replace("{{ jsHash }}", hash(js))
    .replace("{{ cssHash }}", hash(css));

  return {
    js: new TextDecoder().decode(esbuildResult.outputFiles[0].contents),
    html: htmlWithHashes,
    css,
  };
}

function hash(input: string) {
  return createHash("md5").update(input).digest("hex");
}
