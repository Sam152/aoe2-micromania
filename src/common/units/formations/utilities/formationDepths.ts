import { Vector2 } from "three/src/math/Vector2";

export function formationDepth(positions?: Vector2[]): number {
  if (!positions) {
    return 60;
  }

  const first = positions.at(0);
  const last = positions.at(-1);

  return last.y - first.y;
}
