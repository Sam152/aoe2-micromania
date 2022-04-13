import {ClientState, GameState} from '../../types';
import {circle} from './shapes';
import {Buffer} from "buffer";

export default class CanvasRenderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        this.fit();
        window.addEventListener('resize', this.fit.bind(this));
    }

    fit() {
        this.context.canvas.width = window.innerWidth * window.devicePixelRatio;
        this.context.canvas.height = window.innerHeight * window.devicePixelRatio;
    }

    render(gameState: GameState, clientState: ClientState) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        gameState.units.map((unit) => circle(this.context, unit.position.x, unit.position.y, 1));

        if (image) {
            gameState.units.map((unit) => this.context.drawImage(image, unit.position.x, unit.position.y));
        }


    }
}

const SLP = require('genie-slp');
const Palette = require('jascpal');

let imageData: ImageData | null = null;
let image: ImageBitmap | null = null;

(async () => {
    const rawPalette = await fetch('/assets/default-palette.pal').then(response => response.arrayBuffer());
    const palette = new Palette(new Buffer(rawPalette));

    const arrayBuffer = await fetch('/assets/196.slp').then(response => response.arrayBuffer());
    const asset = new SLP(new Buffer(arrayBuffer));


    console.log(asset.getFrame(0));
    imageData = asset.renderFrame(0, palette, {player: 4});

    image = await createImageBitmap(imageData);

})();
