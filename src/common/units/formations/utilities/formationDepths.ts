import { Vector2 } from "three/src/math/Vector2";

const MIN_FORMATION_DEPTH = 110;
const FORMATION_DEPTH_SCALE_FACTOR = 0.6;

export function formationDepth(positions?: Vector2[]): number {
  if (!positions) {
    return MIN_FORMATION_DEPTH * FORMATION_DEPTH_SCALE_FACTOR;
  }

  const yValues = positions.map((position) => position.y);

  const lowest = Math.min(...yValues);
  const highest = Math.max(...yValues);

  return Math.max(highest - lowest, MIN_FORMATION_DEPTH) * FORMATION_DEPTH_SCALE_FACTOR;
}
