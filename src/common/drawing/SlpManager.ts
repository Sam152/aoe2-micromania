import SmxAnimation from "./SmxAnimation.ts";
import assetUrl from "../../client/util/assetUrl.ts";
import { downloadAssets, playerAssets } from "./assets/downloadAssets.ts";
import { createSmxWorkerPool } from "./smx/SmxWorkerPool.ts";
import { MAX_PLAYERS_PER_SERVER } from "../state/mutations/players/provisionPlayer.ts";

const renderedPlayers = Array.from({ length: MAX_PLAYERS_PER_SERVER }, (_, i) => i + 1);

class SlpManager {
  private readonly assetPath: string;
  private readonly slpList: { [key: string]: SmxAnimation };
  private loaded: boolean;

  constructor(assetPath: string) {
    this.assetPath = assetPath;
    this.slpList = {};
    this.loaded = false;
  }

  async downloadPreRenderAll() {
    if (this.loaded) {
      return;
    }

    console.time("Downloading SMX");
    const downloadedSmxFiles = await downloadAssets(this.assetPath);
    console.timeEnd("Downloading SMX");

    const pool = createSmxWorkerPool(Math.min(4, navigator.hardwareConcurrency));
    try {
      console.time("Rendering Frames");
      const renderedSmxLibrary = await Promise.all(
        downloadedSmxFiles.map(({ id, data, palettes }) => {
          const playersToRender = playerAssets.includes(id) ? renderedPlayers : [1];
          return pool.render(data.buffer, palettes, playersToRender).then((frames) => ({ id, frames }));
        }),
      );
      console.timeEnd("Rendering Frames");

      renderedSmxLibrary.forEach(({ id, frames }) => {
        this.slpList[id] = new SmxAnimation(id, frames.length, frames);
      });
      this.loaded = true;
    } finally {
      pool.terminate();
    }
  }

  getAsset(assetId: string): SmxAnimation {
    if (!(assetId in this.slpList)) {
      throw new Error(`Could not find asset in SLP manager ${assetId}`);
    }
    return this.slpList[assetId];
  }
}

const slpManager = new SlpManager(assetUrl("graphics"));
export default slpManager;
