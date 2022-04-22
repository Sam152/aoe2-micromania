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
        return this.slpList[assetId];
    }

    assetPlayerList(): string[] {
        return [
            'xbow-death',
            'xbow-decay',
            'xbow-firing',
            'xbow-moving',
            'xbow-stand',
            'mangonel-stand',
            'mangonel-moving',
            'mangonel-firing',
            'mangonel-death',
            'mangonel-decay',
            'waypoint-flag',
        ];
    }

    assetList(): string[] {
        return [
            'mouse-icons',
            'arrow',
            'rocks',
            'move-command',
            'terrain-green',
            'terrain-sandy',
        ];
    }
}
