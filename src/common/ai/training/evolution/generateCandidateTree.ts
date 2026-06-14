import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { params } from "../params.ts";
import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

type GenerateCandidateTreeArgs = {
  /**
   * The number of attempts we've made to generate a candidate that can beat the current champion pool.
   */
  iterationCount: number;

  /**
   * The current champion list.
   */
  champions: Bot[];
};

export function generateCandidateTree(
  { iterationCount, champions }: GenerateCandidateTreeArgs,
): UnitAwareBehaviourTree {
  const startingPoint = champions.at(0)!;

  const totalMutations = NEXT_GENERATION_RANDOM_MUTATIONS *
    (Math.floor(iterationCount / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

  return randomlyMutateUnitAwareBehaviourTree({
    tree: startingPoint.tree,
    count: totalMutations,
  });
}
