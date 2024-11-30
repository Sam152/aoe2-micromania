import { ClientDispatcher, ClientState, GameState, Line, Rectangle, RendererInterface } from "../../types";
import { circle, emptyCircle, square } from "./shapes";
import { Vector2 } from "three/src/math/Vector2";
import arrayOfSize from "../util/arrayOfSize";
import isInBounds, { bottomLeft, bottomRight, topLeft, topRight } from "../util/isInBounds";
import config from "../config";
import { snapToClamp } from "../util/snapToClamp";
import unitMetadataFactory from "../units/unitMetadataFactory";

export default class DebugRenderer implements RendererInterface {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    window.ctx = this.context;
  }

  bootUp(): Promise<void> {
    return Promise.resolve();
  }

  render(gameState: GameState, clientState: ClientState, clientStateDispatcher: ClientDispatcher): void {
    this.drawUnits(gameState);
    this.drawClampSnap(gameState, clientState);
    this.drawBoundary(gameState, clientState);
  }

  drawClampSnap(gameState: GameState, clientState: ClientState) {
    if (clientState.lastLeftClick) {
      circle(this.context, snapToClamp(clientState.lastLeftClick, gameState.mapSize), 10, "purple");
    }
  }

  drawBoundary(gameState: GameState, clientState: ClientState) {
    arrayOfSize(200).forEach((i) => {
      const n = i * 5;
      const offset = gameState.mapSize * config.tileHeight;
      circle(this.context, new Vector2(n, bottomLeft(n, gameState.mapSize)), 1, "green");
      circle(this.context, new Vector2(n + offset, topRight(n + offset, gameState.mapSize)), 1, "blue");
      circle(this.context, new Vector2(n, topLeft(n, gameState.mapSize)), 1, "red");
      circle(this.context, new Vector2(n + offset, bottomRight(n + offset, gameState.mapSize)), 1, "yellow");
    });

    if (clientState.lastLeftClick) {
      if (isInBounds(clientState.lastLeftClick, gameState.mapSize)) {
        circle(this.context, clientState.lastLeftClick, 10, "green");
      } else {
        circle(this.context, clientState.lastLeftClick, 10, "red");
      }
    }
  }

  drawUnits(gameState: GameState) {
    gameState.units.forEach((unitInstance) => {
      // Draw the unit number.
      this.context.fillStyle = "black";
      this.context.font = "11px Arial";
      this.context.fillText(`${unitInstance.id}`, unitInstance.position.x - 20, unitInstance.position.y - 40);
      // Draw the units hit box.
      const metadata = unitMetadataFactory.getUnit(unitInstance.unitType);
      // square(this.context, getUnitInstanceHitBox(unitInstance));
      emptyCircle(this.context, unitInstance.position, metadata.hitBox);
    });
  }
}
