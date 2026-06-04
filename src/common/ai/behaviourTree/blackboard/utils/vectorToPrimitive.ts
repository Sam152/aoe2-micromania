import { Vector2 } from "three/src/math/Vector2.js";

export function vectorToPrimitive(v: Vector2): { x: number; y: number } {
  return {
    x: v.x,
    y: v.y,
  };
}
