import { Vector2 } from "three/src/math/Vector2";

const MIN_FORMATION_DEPTH = 60;

export function formationDepth(positions?: Vector2[]): number {
  if (!positions) {
    return MIN_FORMATION_DEPTH;
  }

  const first = positions.at(0);
  const last = positions.at(-1);

  return Math.max(last.y - first.y, MIN_FORMATION_DEPTH);
}
