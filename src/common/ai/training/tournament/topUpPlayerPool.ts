import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

export async function topUpPlayerPool(
  { requiredPoolSize, baseTree, mutationCount }: {
    requiredPoolSize: number;
    baseTree: UnitAwareBehaviourTree;
    mutationCount: number;
  },
) {
  const count = await activeBotsCount();
  if (count < requiredPoolSize) {
    for (let i = 0; i < requiredPoolSize - count; i++) {
      await insertBot(randomlyMutateUnitAwareBehaviourTree({ tree: baseTree, count: mutationCount }));
    }
  }
}
