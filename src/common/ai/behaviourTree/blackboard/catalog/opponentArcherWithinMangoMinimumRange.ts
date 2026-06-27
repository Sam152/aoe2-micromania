import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { inMinimumRange } from "../../../../util/inAttackRange.ts";
import { UnitType } from "../../../../units/UnitType.ts";

/**
 * Only archers can actually threaten a mango, within its minimum range.
 */
export const opponentArcherWithinMangoMinimumRange = defineBlackboardValue({
  dataType: "unitId",
  params: {},
  resolve: ({ botState, computed, state }) => {
    const archerTrees = computed.archerQuadTreesByPlayer();

    const opponentArcherTrees = Object.entries(archerTrees)
      .filter(([player]) => Number(player) !== botState.playingAs)
      .map(([, tree]) => tree);

    if (opponentArcherTrees.length === 0) {
      return undefined;
    }

    const botMangonels = state.units.filter(
      (unit) => unit.ownedByPlayer === botState.playingAs && unit.unitType === UnitType.Mangonel,
    );

    for (const mangonel of botMangonels) {
      for (const archerTree of opponentArcherTrees) {
        const closestArcher = archerTree.find(mangonel.position.x, mangonel.position.y);
        if (closestArcher && inMinimumRange(mangonel, closestArcher.position)) {
          return closestArcher.id;
        }
      }
    }

    return undefined;
  },
});
