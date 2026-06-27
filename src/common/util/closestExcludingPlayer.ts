import { Quadtree } from "d3-quadtree";
import { Vector2 } from "three/src/math/Vector2.js";
import { UnitInstance } from "../../types.ts";

export type PlayerQuadTrees = Record<number, Quadtree<UnitInstance>>;

export function closestExcludingPlayer({
  excludingPlayer,
  position,
  playerQuadTrees,
}: {
  excludingPlayer: number;
  position: Vector2 | undefined;
  playerQuadTrees: PlayerQuadTrees;
}): UnitInstance | undefined {
  if (!position) {
    return undefined;
  }

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
