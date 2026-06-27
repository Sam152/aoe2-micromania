import { Bot } from "../../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { randomlyMutateTree } from "../../../mutation/randomlyMutateTree.ts";
import { Coinflip, coinflip } from "../../../../util/coinflip.ts";
import { calculateMutationCount } from "./calculateMutationCount.ts";

type GenerateCandidateTreeArgs = {
  iterationsSinceLastWin: number;
  borrowBots: Bot[];
  startingPoint: Bot;
};

export function generateCandidateTree(
  { iterationsSinceLastWin, borrowBots, startingPoint }: GenerateCandidateTreeArgs,
): UnitAwareBehaviourTree {
  const count = calculateMutationCount({ iterationsSinceLastWin });

  return randomlyMutateUnitAwareBehaviourTree({
    previousBots: borrowBots,
    tree: startingPoint.tree,
    count,
  });
}

export function randomlyMutateUnitAwareBehaviourTree(
  { count, tree, previousBots }: { count: number; tree: UnitAwareBehaviourTree; previousBots: Bot[] },
): UnitAwareBehaviourTree {
  const [a, b, c] = flipUntilAtLeastOneHeads();

  // Don't always mutate all trees, we might have a strong tree for one unit that does
  // not want to be mutated.
  return {
    [UnitType.Archer]: a === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Archer], unitType: UnitType.Archer, previousBots })
      : structuredClone(tree[UnitType.Archer]),
    [UnitType.Mangonel]: b === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Mangonel], unitType: UnitType.Mangonel, previousBots })
      : structuredClone(tree[UnitType.Mangonel]),
    [UnitType.Monk]: c === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Monk], unitType: UnitType.Monk, previousBots })
      : structuredClone(tree[UnitType.Monk]),
  };
}

function flipUntilAtLeastOneHeads(): [Coinflip, Coinflip, Coinflip] {
  while (true) {
    const flips: [Coinflip, Coinflip, Coinflip] = [coinflip(), coinflip(), coinflip()];
    if (flips.some((flip) => flip === "HEADS")) {
      return flips;
    }
  }
}
