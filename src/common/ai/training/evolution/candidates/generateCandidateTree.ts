import { Bot } from "../../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../../behaviourTree/BehaviourTree.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { randomlyMutateTree } from "../../../mutation/randomlyMutateTree.ts";

import { calculateMutationCount } from "./calculateMutationCount.ts";
import { withProbability } from "../../utils/withProbability.ts";

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
    borrowBots: borrowBots,
    tree: startingPoint.tree,
    count,
  });
}

export function randomlyMutateUnitAwareBehaviourTree(
  { count, tree, borrowBots }: { count: number; tree: UnitAwareBehaviourTree; borrowBots: Bot[] },
): UnitAwareBehaviourTree {
  // Don't always mutate all trees, we might have a strong tree for one unit that does
  // not want to be mutated.
  const updatedTree = (unitType: UnitType) => (withProbability([
    {
      probability: 20,
      effect: () => structuredClone(tree[unitType]),
    },
    {
      probability: 80,
      effect: () => randomlyMutateTree({ count, tree: tree[unitType], unitType, borrowBots: borrowBots }),
    },
  ])());

  return {
    [UnitType.Archer]: updatedTree(UnitType.Archer),
    [UnitType.Mangonel]: updatedTree(UnitType.Mangonel),
    [UnitType.Monk]: updatedTree(UnitType.Monk),
  };
}
