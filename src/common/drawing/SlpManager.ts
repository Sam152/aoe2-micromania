import Slp from './Slp';
import {Buffer} from 'buffer';
import {SlpFrame} from '../../types';

const SLP = require('genie-slp');
const Palette = require('jascpal');

const renderedPlayers = [1, 2, 3, 4, 5, 6, 7, 8];

export default class SlpManager {
    private readonly assetPath: string;
    private readonly slpList: { [key: string]: Slp; };

    constructor(assetPath: string) {
        this.assetPath = assetPath;
        this.slpList = {};
    }

    async downloadPreRenderAll() {
        const paletteArrayBuffer = await fetch(`${this.assetPath}/default-palette.pal`)
            .then((response) => response.arrayBuffer());

        const palette = new Palette(new Buffer(paletteArrayBuffer));

        const downloadedSlps = await Promise.all(
            [...this.assetList(), ...this.assetPlayerList()]
                .map((assetId) => fetch(`${this.assetPath}/${assetId}.slp`)
                    .then((response) => response.arrayBuffer())
                    .then((arrayBuffer) => ({
                        id: assetId,
                        slp: new SLP(new Buffer(arrayBuffer)),
                    })),
                ),
        );

        const renderedFrames = await Promise.all(downloadedSlps.map(async ({id, slp}) => {
            const frames = await Promise.all(slp.frames.map(async (frame: SlpFrame, frameNumber: number) => {
                const rendersToBuild = this.assetPlayerList().includes(id) ? renderedPlayers : [1];

                const rendered = await Promise.all(rendersToBuild.map((playerId) => {
                    const imageData = slp.renderFrame(frameNumber, palette, {player: playerId});
                    return createImageBitmap(imageData).then((bitmap) => ({
                        playerId,
                        bitmap,
                    }));
                }));
                return {
                    ...frame,
                    rendered: rendered.reduce((object, {playerId, bitmap}) => {
                        object[playerId] = bitmap;
                        return object;
                    }, {} as { [key: number]: ImageBitmap }),
                };
            }));
            return {
                id,
                slp,
                frames,
            };
        }));

        renderedFrames.forEach(({id, slp, frames}) => {
            this.slpList[id] = new Slp(id, slp, frames);
        });
    }

    getAsset(assetId: string): Slp {
        if (!(assetId in this.slpList)) {
            throw new Error(`Could not find asset in SLP manager ${assetId}`);
        }
        return this.slpList[assetId];
    }

    assetPlayerList(): string[] {
        return [
            'units/xbow-death',
            'units/xbow-decay',
            'units/xbow-firing',
            'units/xbow-moving',
            'units/xbow-stand',
            'units/mangonel-stand',
            'units/mangonel-moving',
            'units/mangonel-firing',
            'units/mangonel-death',
            'units/mangonel-decay',
            'interface/waypoint-flag',
        ];
    }

    assetList(): string[] {
        return [
            'projectiles/arrow',
            'projectiles/rocks',
            'interface/move-command',
            'terrain/cobble',
            'terrain/green',
            'terrain/sandy',
        ];
    }
}
