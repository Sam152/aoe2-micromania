import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

export async function bundleWorker() {
  const configPath = new URL("../../deno.json", import.meta.url).pathname;
  const entrypoint = new URL("../common/drawing/smx/renderSmxWorker.ts", import.meta.url).pathname;

  const nodePolyfillsPlugin: esbuild.Plugin = {
    name: "node-polyfills",
    setup(build) {
      const bufferPath = new URL("../../node_modules/buffer/index.js", import.meta.url).pathname;
      build.onResolve({ filter: /^buffer$/ }, () => ({ path: bufferPath }));
    },
  };

  const result = await esbuild.build({
    plugins: [nodePolyfillsPlugin, ...(denoPlugins({ configPath }) as esbuild.Plugin[])],
    entryPoints: [entrypoint],
    inject: [new URL("../client/assets/buffer-shim.js", import.meta.url).pathname],
    bundle: true,
    format: "esm",
    platform: "browser",
    write: false,
  });

  if (!result.outputFiles) {
    throw new Error("No output files in worker build");
  }

  return {
    js: new TextDecoder().decode(result.outputFiles[0].contents),
  };
}
