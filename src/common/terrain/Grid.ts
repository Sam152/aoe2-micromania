import { Vector2 } from "three/src/math/Vector2";
import config from "../config";
import { GameState } from "../../types";

const gridCache: { [key: number]: Grid } = {};

export default class Grid {
  public readonly size: number;
  private readonly tileHalfHeight: number;
  private readonly tileHalfWidth: number;
  private gridMiddle: Vector2;

  constructor(size: number) {
    this.size = size;
    this.tileHalfHeight = config.tileHeight / 2;
    this.tileHalfWidth = config.tileWidth / 2;
    this.gridMiddle = new Vector2((config.tileWidth * size) / 2, (config.tileHeight * size) / 2);
  }

  static fromGameState(gameState: GameState) {
    if (gridCache[gameState.mapSize]) {
      return gridCache[gameState.mapSize];
    }
    gridCache[gameState.mapSize] = new Grid(gameState.mapSize);
    return gridCache[gameState.mapSize];
  }

  tileDrawnAt(x: number, y: number): Vector2 {
    const xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
    const yOffset = -1 * x * this.tileHalfHeight + y * this.tileHalfHeight;
    return new Vector2(xOffset, (this.size - 1) * this.tileHalfHeight + yOffset);
  }

  middleOfTile(x: number, y: number): Vector2 {
    const xOffset = x * this.tileHalfWidth + y * this.tileHalfWidth;
    const yOffset = -1 * x * this.tileHalfHeight + y * this.tileHalfHeight;
    return new Vector2(this.tileHalfWidth + xOffset, this.size * this.tileHalfHeight + yOffset);
  }

  middleOfGrid(): Vector2 {
    return this.gridMiddle;
  }

  iterateTiles(func: (x: number, y: number) => void) {
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        func(x, y);
      }
    }
  }
}
