import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { params } from "../params.ts";
import { randomlyMutateUnitAwareBehaviourTree } from "../../mutation/randomlyMutateUnitAwareBehaviourTree.ts";
import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { hasPlayerTwoWon } from "./hasPlayerTwoWon.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

type EvolutionCandidateArgs = {
  champions: Bot[];
  pool: GameWorkerPool;
};

const { NEXT_GENERATION_RANDOM_MUTATIONS, NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT } = params;

/**
 * Create a candidate, either by random mutation or genetic mutation from existing champion pool.
 */
export async function createEvolutionCandidate({ champions, pool }: EvolutionCandidateArgs) {
  const startingPoint = champions.at(0)!;

  for (let i = 0;; i++) {
    const totalMutations = NEXT_GENERATION_RANDOM_MUTATIONS *
      (Math.floor(i / NEXT_GENERATION_RANDOM_MUTATIONS_STEP_AMOUNT) + 1);

    const mutated = randomlyMutateUnitAwareBehaviourTree({
      tree: startingPoint.tree,
      count: totalMutations,
    });

    if (await canBeatAllChampions({ champions, tree: mutated, pool })) {
      return mutated;
    }
  }
}

async function canBeatAllChampions({ champions, pool, tree }: {
  champions: Bot[];
  pool: GameWorkerPool;
  tree: UnitAwareBehaviourTree;
}) {
  for (const champion of champions) {
    const result = await pool.runInPool({ 1: champion.tree, 2: tree });
    if (!hasPlayerTwoWon(result)) {
      return false;
    }
  }
  return true;
}
