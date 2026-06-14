import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { GameResult } from "../utils/determineWinner.ts";

export async function canBeatAllChampions({ champions, pool, tree }: {
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

/**
 * What is considered a win? Do you have to win by some amount? Completely wipe out
 * opponent? Tune this to favor aggression, defense etc.
 */
export function hasPlayerTwoWonAgainstChampion(result: GameResult) {
  return result.winner === 2 && result.hp[2] - result.hp[1] > 250;
}
