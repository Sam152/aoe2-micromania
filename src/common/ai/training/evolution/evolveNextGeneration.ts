import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";

const { CPU_WORKER_COUNT, NEXT_GENERATION_RANDOM_MUTATIONS } = params;

type EvolveNextGenArgs = {
  specimens: UnitAwareBehaviourTree[];
  newPlayersRequired: number;
};

export function evolveNextGeneration(
  { specimens, newPlayersRequired }: EvolveNextGenArgs,
): Promise<UnitAwareBehaviourTree>[] {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);

  const targets = Array.from({ length: newPlayersRequired }, (_, i) => specimens[i % specimens.length]);

  const promises = targets.map(async (specimen) => {
    for (let i = 0;; i++) {
      const mutated = randomlyMutateUnitAwareBehaviourTree({
        tree: specimen,
        // Increase the random mutations, if we cannot find a winner.
        count: NEXT_GENERATION_RANDOM_MUTATIONS * (Math.floor(i / 10_000) + 1),
      });
      const result = await runInPool({ 1: specimen, 2: mutated });
      if (result.winner === 2 && result.hp[2] - result.hp[1] > 250) {
        return mutated;
      }
    }
  });

  Promise.all(promises).then(() => terminatePool());

  return promises;
}
