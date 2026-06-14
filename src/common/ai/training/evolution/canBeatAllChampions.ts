import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { hasPlayerTwoWonAgainstChampion } from "./hasPlayerTwoWonAgainstChampion.ts";

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
