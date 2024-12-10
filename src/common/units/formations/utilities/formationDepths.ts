import { Vector2 } from "three/src/math/Vector2";

const MIN_FORMATION_DEPTH = 0;
const FIXED_FACTOR = 60;

export function formationDepth(positions?: Vector2[]): number {
  if (!positions) {
    return MIN_FORMATION_DEPTH + FIXED_FACTOR;
  }

  const yValues = positions.map((position) => position.y);

  const lowest = Math.min(...yValues);
  const highest = Math.max(...yValues);

  return Math.max(highest - lowest, MIN_FORMATION_DEPTH) + FIXED_FACTOR;
}
