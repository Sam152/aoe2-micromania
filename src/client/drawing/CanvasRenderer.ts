import {ClientState, GameState} from "../../types";
import {circle} from "./shapes";

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
        this.context.canvas.width  = window.innerWidth;
        this.context.canvas.height = window.innerHeight;
    }

    render(gameState: GameState, clientState: ClientState) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.width);
        gameState.units.map(unit => circle(this.context, unit.position.x, unit.position.y, 10));
    }
}
