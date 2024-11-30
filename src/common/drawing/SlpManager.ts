import {Buffer} from 'buffer';
import Smx, {PaletteCollectionFactory} from "genie-smx";
import SmxAnimation from "./SmxAnimation";
import assetUrl from "../../client/util/assetUrl";

const renderedPlayers = [1, 2, 3, 4, 5, 6, 7, 8];

class SlpManager {
    private readonly assetPath: string;
    private readonly slpList: { [key: string]: SmxAnimation; };
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

        const palettes = await PaletteCollectionFactory.fromHttp(`${this.assetPath}/palettes`);

        const downloadedSmxFiles = await Promise.all(
            [...this.assetList(), ...this.assetPlayerList()]
                .map((assetId) => fetch(`${this.assetPath}/${assetId}.smx`)
                    .then((response) => response.arrayBuffer())
                    .then((arrayBuffer) => ({
                        id: assetId,
                        smx: new Smx(new Buffer(arrayBuffer), palettes),
                    })),
                ),
        );

        const renderedSmxLibrary = await Promise.all(downloadedSmxFiles.map(async ({id, smx}) => {

            const frames = await Promise.all(smx.getFrames().map(async (frame, frameNumber: number) => {
                const rendersToBuild = this.assetPlayerList().includes(id) ? renderedPlayers : [1];

                const perPlayerRenders = await Promise.all(rendersToBuild.map((playerId) => {
                    const imageData = smx.renderFrame(frameNumber, playerId);
                    return createImageBitmap(imageData).then((bitmap) => ({
                        playerId,
                        bitmap,
                    }));
                }));

                let shadow: ImageBitmap | null = null;
                if (smx.hasShadow(frameNumber)) {
                    const renderedShadow = smx.renderShadow(frameNumber);
                    shadow = await createImageBitmap(renderedShadow);
                }

                return {
                    frameDefinition: frame,
                    shadowRender: shadow,
                    playerRenders: perPlayerRenders.reduce((object, {playerId, bitmap}) => {
                        object[playerId] = bitmap;
                        return object;
                    }, {} as { [key: number]: ImageBitmap }),
                };
            }));
            return {
                id,
                smx,
                frames,
            };
        }));

        renderedSmxLibrary.forEach(({id, smx, frames}) => {
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

    assetPlayerList(): string[] {
        return [
            'units/u_arc_crossbowman_attackA_x1',
            'units/u_arc_crossbowman_deathA_x1',
            'units/u_arc_crossbowman_decayA_x1',
            'units/u_arc_crossbowman_idleA_x1',
            'units/u_arc_crossbowman_walkA_x1',

            'units/u_sie_mangonel_attackA_x1',
            'units/u_sie_mangonel_deathA_x1',
            'units/u_sie_mangonel_decayA_x1',
            'units/u_sie_mangonel_idleA_x1',
            'units/u_sie_mangonel_walkA_x1',

            'interface/dc_b_misc_waypoint_flag_x1',
        ];
    }

    assetList(): string[] {
        return [
            'interface/MOVETO',

            'projectiles/p_mangonel_x1',
            'projectiles/p_arrow_x1',

            'terrain/15001-grass',
            'terrain/15008-grass-2',
            'terrain/15009-grass-dirt',
            'terrain/15010-desert',
            'terrain/15019-cobble',
        ];
    }
}

const slpManager = new SlpManager(assetUrl('graphics'));
export default slpManager;
