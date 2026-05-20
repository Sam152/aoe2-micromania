import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

export async function runEsbuild(entrypoint: string, extraOptions: esbuild.BuildOptions = {}) {
  const configPath = new URL("../../deno.json", import.meta.url).pathname;

  const result = await esbuild.build({
    plugins: [...(denoPlugins({ configPath }) as esbuild.Plugin[])],
    entryPoints: [entrypoint],
    bundle: true,
    format: "esm",
    platform: "browser",
    write: false,
    ...extraOptions,
  });

  if (!result.outputFiles) {
    throw new Error("No output files");
  }
  return new TextDecoder().decode(result.outputFiles[0].contents);
}
