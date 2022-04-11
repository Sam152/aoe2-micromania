import {ClientState, GameState} from "../types";

export default class CanvasRenderer {
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    render(gameState: GameState, clientState: ClientState) {

    }
}
