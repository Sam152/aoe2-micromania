import { Vector2 } from "three/src/math/Vector2.js";
import { config } from "../config.ts";

/**
 * Unit positions are stored in isometric screen space, where a tile spans `tileWidth`
 * horizontally but only `tileHeight` vertically. Measuring raw pixel distance therefore
 * reaches twice as far up and down the screen as it does left to right, which makes a
 * circular attack range behave like an ellipse on the ground.
 *
 * These scales undo that projection by `config.perspectiveCorrection`, so that unit stats
 * mean close to the same thing whichever way a unit is facing. A tile step measures exactly
 * `tileGameStatsLength` at any correction, so the setting only trades the vertical against
 * the horizontal.
 */
const verticalCost = Math.pow(config.tileWidth / config.tileHeight, config.perspectiveCorrection);
const xScale = config.tileGameStatsLength /
  Math.hypot(config.tileWidth / 2, (config.tileHeight / 2) * verticalCost);
const yScale = xScale * verticalCost;

/**
 * The screen space semi-axes of a world space radius. Because a vertical pixel costs more
 * than a horizontal one, anything measured with `worldDistance` is an ellipse on screen, and
 * drawing it as a circle would misrepresent where a unit can actually reach.
 */
export function worldRadiusToScreen(radius: number): { x: number; y: number } {
  return { x: radius / xScale, y: radius / yScale };
}

export function worldDistanceSquared(from: Vector2, to: Vector2): number {
  const dx = (to.x - from.x) * xScale;
  const dy = (to.y - from.y) * yScale;
  return dx * dx + dy * dy;
}

export function worldDistance(from: Vector2, to: Vector2): number {
  return Math.sqrt(worldDistanceSquared(from, to));
}

/**
 * A screen space vector re-expressed in world space, for maths that has to stay consistent
 * across both axes — an intercept solve, say. The result is in world units, not pixels, so
 * do not add it back to a position.
 */
export function toWorldVector(vector: Vector2): Vector2 {
  return new Vector2(vector.x * xScale, vector.y * yScale);
}

/**
 * How far a screen space offset travels across the ground. Use this rather than
 * `Vector2.length()` when a vector describes movement, so that a step of a given world
 * length covers the same ground whichever way it points.
 */
export function worldLength(vector: Vector2): number {
  const dx = vector.x * xScale;
  const dy = vector.y * yScale;
  return Math.sqrt(dx * dx + dy * dy);
}
