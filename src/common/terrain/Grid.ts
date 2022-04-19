import {Vector2} from "three";
import config from "../config";
import {GameState} from "../../types";

export default class Grid {
    private readonly size: number;
    private readonly indexSize: number;
    private readonly tileHalfHeight: number;
    private readonly tileHalfWidth: number;

    constructor(size: number) {
        this.size = size;
        this.tileHalfHeight = config.tileHeight / 2;
        this.tileHalfWidth = config.tileWidth / 2;
    }

    static fromGameState(gameState: GameState) {
        return new Grid(gameState.mapSize);
    }

    tileDrawnAt(x: number, y: number): Vector2 {
        const xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
        const yOffset = (-1 * x * this.tileHalfHeight) + (y * this.tileHalfHeight);
        return new Vector2(
            xOffset,
            ((this.size - 1) * this.tileHalfHeight) + yOffset,
        );
    }

    middleOfTile(x: number, y: number): Vector2 {
        const xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
        const yOffset = (-1 * x * this.tileHalfHeight) + (y * this.tileHalfHeight);
        return new Vector2(
            this.tileHalfWidth + xOffset,
            (this.size * this.tileHalfHeight) + yOffset,
        );
    }

    iterateTiles(func: (x: number, y: number) => void) {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                func(x, y);
            }
        }
    }

}
