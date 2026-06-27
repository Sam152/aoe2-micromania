import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { UnitInstance } from "../../../../../types.ts";
import { groupAveragePosition } from "../utils/groupAveragePosition.ts";
import { playersQuadTreesForUnitType } from "../utils/playerQuadTreesForUnitType.ts";
import { Quadtree } from "d3-quadtree";

export const opponentMedoidUnitByType = defineBlackboardValue({
  dataType: "unitId",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params: { unitType }, group, botState, computed }) => {
    const groupPosition = groupAveragePosition({ group, computed });
    if (!groupPosition) {
      return;
    }

    const opponentTrees = Object.entries(
      playersQuadTreesForUnitType({ computed, unitType }),
    ).filter(([player]) => Number(player) !== botState.playingAs);

    let closest: UnitInstance | undefined;
    let closestDist = Infinity;

    for (const [, tree] of opponentTrees) {
      const medoid = computeMedoid(tree);
      if (!medoid) {
        continue;
      }

      const dist = medoid.position.distanceToSquared(groupPosition);
      if (dist < closestDist) {
        closestDist = dist;
        closest = medoid;
      }
    }

    return closest?.id;
  },
});

function computeMedoid(tree: Quadtree<UnitInstance>): UnitInstance | undefined {
  const units = tree.data();
  if (units.length === 0) { return undefined; }
  if (units.length === 1) { return units[0]; }

  // Weiszfeld geometric median — start at centroid
  let gx = 0, gy = 0;
  for (const u of units) {
    gx += u.position.x;
    gy += u.position.y;
  }
  gx /= units.length;
  gy /= units.length;

  for (let i = 0; i < 50; i++) {
    let wx = 0, wy = 0, wSum = 0;
    for (const u of units) {
      const dx = u.position.x - gx;
      const dy = u.position.y - gy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 1e-7) { continue; }
      const w = 1 / d;
      wx += u.position.x * w;
      wy += u.position.y * w;
      wSum += w;
    }
    if (wSum === 0) { break; }
    const nx = wx / wSum;
    const ny = wy / wSum;
    if (Math.abs(nx - gx) < 1e-7 && Math.abs(ny - gy) < 1e-7) { break; }
    gx = nx;
    gy = ny;
  }

  return tree.find(gx, gy);
}
