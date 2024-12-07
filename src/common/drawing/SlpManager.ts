import SmxAnimation from "./SmxAnimation";
import assetUrl from "../../client/util/assetUrl";
import { downloadAssets, playerAssets } from "./assets/downloadAssets";

const renderedPlayers = [1, 2, 3, 4, 5, 6, 7, 8];

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

    console.time("Creating SMX");
    const downloadedSmxFiles = await downloadAssets(this.assetPath);
    console.timeEnd("Creating SMX");

    console.time("Rendering Frames");
    const renderedSmxLibrary = await Promise.all(
      downloadedSmxFiles.map(async ({ id, smx }) => {
        const frames = await Promise.all(
          smx.getFrames().map(async (frame, frameNumber: number) => {
            const rendersToBuild = playerAssets.includes(id) ? renderedPlayers : [1];

            const perPlayerRenders = await Promise.all(
              rendersToBuild.map(async (playerId) => {
                const imageData = smx.renderFrame(frameNumber, playerId);
                return await createImageBitmap(imageData).then((bitmap) => ({
                  playerId,
                  bitmap,
                }));
              }),
            );

            let shadow: ImageBitmap | null = null;
            if (smx.hasShadow(frameNumber)) {
              const renderedShadow = smx.renderShadow(frameNumber);
              shadow = await createImageBitmap(renderedShadow);
            }

            return {
              frameDefinition: frame,
              shadowRender: shadow,
              playerRenders: perPlayerRenders.reduce(
                (object, { playerId, bitmap }) => {
                  object[playerId] = bitmap;
                  return object;
                },
                {} as { [key: number]: ImageBitmap },
              ),
            };
          }),
        );
        return {
          id,
          smx,
          frames,
        };
      }),
    );
    console.timeEnd("Rendering Frames");

    renderedSmxLibrary.forEach(({ id, smx, frames }) => {
      this.slpList[id] = new SmxAnimation(id, smx, frames);
    });
    this.loaded = true;
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
