import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { playersQuadTreesForUnitType } from "../utils/playerQuadTreesForUnitType.ts";
import { UnitInstance } from "../../../../../types.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { inMinimumRange } from "../../../../util/inAttackRange.ts";

export const opponentClosestUnitByTypeNotInMinRange = defineBlackboardValue({
  dataType: "unitId",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, group, botState, computed }) => {
    if (group.unitType !== UnitType.Mangonel) {
      return undefined;
    }

    const groupUnit = computed.unitsById()[group.includedUnits[0]];
    if (!groupUnit) {
      return undefined;
    }

    const playerTrees = playersQuadTreesForUnitType({ computed, unitType: params.unitType });

    const candidates = Object.entries(playerTrees)
      .filter(([player]) => Number(player) !== botState.playingAs)
      .map(([, tree]) => {
        const clone = tree.copy();
        let candidate: UnitInstance | undefined;
        while ((candidate = clone.find(groupUnit.position.x, groupUnit.position.y)) !== undefined) {
          if (!inMinimumRange(groupUnit, candidate.position)) {
            return candidate;
          }
          clone.remove(candidate);
        }
        return undefined;
      })
      .filter((c): c is UnitInstance => c != null);

    return candidates.reduce<UnitInstance | undefined>(
      (closest, candidate) =>
        !closest ||
          candidate.position.distanceTo(groupUnit.position) < closest.position.distanceTo(groupUnit.position)
          ? candidate
          : closest,
      undefined,
    )?.id;
  },
});
