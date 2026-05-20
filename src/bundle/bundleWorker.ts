import { runEsbuild } from "./bundle.ts";

export async function bundleWorker() {
  const entrypoint = new URL("../common/drawing/smx/renderSmxWorker.ts", import.meta.url).pathname;
  const js = await runEsbuild(entrypoint);
  return { js };
}
