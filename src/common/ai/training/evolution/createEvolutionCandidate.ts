import { Bot } from "../infra/repo/utils/botRowToBot.ts";

import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { hasPlayerTwoWonAgainstChampion } from "./hasPlayerTwoWonAgainstChampion.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { generateCandidateTree } from "./generateCandidateTree.ts";

type EvolutionCandidateArgs = {
  champions: Bot[];
  pool: GameWorkerPool;
};

/**
 * Create a candidate, either by random mutation or genetic mutation from existing champion pool.
 */
export async function createEvolutionCandidate({ champions, pool }: EvolutionCandidateArgs) {
  for (let i = 0;; i++) {
    const mutated = generateCandidateTree({
      iterationCount: i,
      champions,
    });

    if (await canBeatAllChampions({ champions, tree: mutated, pool })) {
      console.log(`Beat ${champions.length} champions after ${i} iterations`);
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
    if (!hasPlayerTwoWonAgainstChampion(result)) {
      return false;
    }
  }
  return true;
}
