import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { GameResult } from "../utils/determineWinner.ts";
import { params } from "../params.ts";

const { CANDIDATE_TREE_REQUIRED_HP_AGAINST_CHAMPION } = params;

export async function canBeatAllChampions({ champions, pool, tree }: {
  champions: Bot[];
  pool: GameWorkerPool;
  tree: UnitAwareBehaviourTree;
}) {
  for (const champion of champions) {
    // Force the bot to win in both positions, to properly generalize.
    const resultA = await pool.runInPool({ 1: champion.tree, 2: tree });
    if (!resultConsideredWinning({ result: resultA, incumbent: 1, challenger: 2 })) {
      return false;
    }

    const resultB = await pool.runInPool({ 1: tree, 2: champion.tree });
    if (!resultConsideredWinning({ result: resultB, incumbent: 2, challenger: 1 })) {
      return false;
    }
  }
  return true;
}

/**
 * What is considered a win? Do you have to win by some amount? Completely wipe out
 * opponent? Tune this to favor aggression, defense etc.
 */
export function resultConsideredWinning(
  { result, challenger, incumbent }: { result: GameResult; challenger: 1 | 2; incumbent: 1 | 2 },
) {
  return result.winner === challenger &&
    // Ensure the incumbent was completely defeated, to prevent camping and inactivity.
    result.hp[incumbent] === 0 &&
    result.hp[challenger] > CANDIDATE_TREE_REQUIRED_HP_AGAINST_CHAMPION;
}
