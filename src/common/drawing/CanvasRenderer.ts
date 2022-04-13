import {ClientState, GameState} from '../../types';
import SlpManager from "./SlpManager";

export default class CanvasRenderer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private slpManager: SlpManager;

    constructor(canvas: HTMLCanvasElement, slpManager: SlpManager) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.slpManager = slpManager;

        this.fit();
        window.addEventListener('resize', this.fit.bind(this));
    }

    fit() {
        this.context.canvas.width = window.innerWidth * 1.2;
        this.context.canvas.height = window.innerHeight * 1.2;
    }

    render(gameState: GameState, clientState: ClientState) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);

        gameState.units.map((unit) => {
            this.slpManager.getAsset('xbow-firing').draw(this.context, unit.position, 0.7, gameState.ticks, 1);
        });
    }
}
