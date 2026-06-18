import { Bot } from "../../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { randomlyMutateTree } from "../../../mutation/randomlyMutateTree.ts";
import { Coinflip, coinflip } from "../../../../util/coinflip.ts";
import { calculateMutationCount } from "./calculateMutationCount.ts";
import { selectStartingTreeFromBots } from "./selectStartingTreeFromBots.ts";

type GenerateCandidateTreeArgs = {
  iterationsSinceLastWin: number;
  previousBots: Bot[];
};

export function generateCandidateTree(
  { iterationsSinceLastWin, previousBots }: GenerateCandidateTreeArgs,
): UnitAwareBehaviourTree {
  const startingPoint = selectStartingTreeFromBots({ iterationsSinceLastWin, previousBots });
  const count = calculateMutationCount({ iterationsSinceLastWin });

  return randomlyMutateUnitAwareBehaviourTree({
    tree: startingPoint.tree,
    count,
  });
}

export function randomlyMutateUnitAwareBehaviourTree(
  { count, tree }: { count: number; tree: UnitAwareBehaviourTree },
): UnitAwareBehaviourTree {
  const [a, b, c] = flipUntilAtLeastOneHeads();

  // Don't always mutate all trees, we might have a strong tree for one unit that does
  // not want to be mutated.
  return {
    [UnitType.Archer]: a === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Archer], unitType: UnitType.Archer })
      : structuredClone(tree[UnitType.Archer]),
    [UnitType.Mangonel]: b === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Mangonel], unitType: UnitType.Mangonel })
      : structuredClone(tree[UnitType.Mangonel]),
    [UnitType.Monk]: c === "HEADS"
      ? randomlyMutateTree({ count, tree: tree[UnitType.Monk], unitType: UnitType.Monk })
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
