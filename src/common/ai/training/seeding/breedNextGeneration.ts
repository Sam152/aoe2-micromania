import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { trainingParams } from "../trainingParams.ts";

const { CPU_WORKER_COUNT, NEXT_GENERATION_RANDOM_MUTATIONS } = trainingParams;

type BreedNextGenArgs = {
  specimens: UnitAwareBehaviourTree[];
  newPlayersRequired: number;
};

export function breedNextGeneration(
  { specimens, newPlayersRequired }: BreedNextGenArgs,
): Promise<UnitAwareBehaviourTree>[] {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);

  const targets = Array.from({ length: newPlayersRequired }, (_, i) => specimens[i % specimens.length]);

  const promises = targets.map(async (specimen) => {
    while (true) {
      const mutated = randomlyMutateUnitAwareBehaviourTree({
        tree: specimen,
        count: NEXT_GENERATION_RANDOM_MUTATIONS,
      });
      const result = await runInPool({ 1: specimen, 2: mutated });

      if (result.winner === 2) {
        return mutated;
      }
    }
  });

  Promise.all(promises).then(() => terminatePool());

  return promises;
}
