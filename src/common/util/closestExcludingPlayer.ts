import { Quadtree } from "d3-quadtree";
import { Vector2 } from "three/src/math/Vector2.js";
import { UnitInstance } from "../../types.ts";

export function closestExcludingPlayer({
  excludingPlayer,
  position,
  playerQuadTrees,
}: {
  excludingPlayer: number;
  position: Vector2;
  playerQuadTrees: Record<number, Quadtree<UnitInstance>>;
}): UnitInstance | undefined {
  return Object.entries(playerQuadTrees)
    .filter(([player]) => Number(player) !== excludingPlayer)
    .map(([, tree]) => tree.find(position.x, position.y))
    .filter((c): c is UnitInstance => c != null)
    .reduce<UnitInstance | undefined>(
      (closest, candidate) =>
        !closest || candidate.position.distanceTo(position) < closest.position.distanceTo(position)
          ? candidate
          : closest,
      undefined,
    );
}
