import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { GameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { GameResult } from "../utils/determineWinner.ts";
import { params } from "../params.ts";
import { UnitTypeActivations } from "../../integration/createBot.ts";
import { UnitType } from "../../../units/UnitType.ts";
import { mergeActivations } from "../utils/mergeActivations.ts";

const { CANDIDATE_TREE_REQUIRED_HP_AGAINST_CHAMPION } = params;

type CanBeatAllChampionsResult = { outcome: "NOPE" } | {
  outcome: "YES";
  /**
   * Activations as a result of beating every prior champion.
   */
  activations: UnitTypeActivations;
};

export async function canBeatAllChampions({ champions, pool, tree }: {
  champions: Bot[];
  pool: GameWorkerPool;
  tree: UnitAwareBehaviourTree;
}): Promise<CanBeatAllChampionsResult> {
  const activations = {
    [UnitType.Monk]: new Set<string>(),
    [UnitType.Archer]: new Set<string>(),
    [UnitType.Mangonel]: new Set<string>(),
  };
  const appendActivations = (toAppend: UnitTypeActivations) => mergeActivations(activations, toAppend);

  for (const champion of champions) {
    // Force the bot to win in both positions, to properly generalize.
    const resultA = await pool.runInPool({ 1: champion.tree, 2: tree });
    if (!resultConsideredWinning({ result: resultA, incumbent: 1, challenger: 2 })) {
      return { outcome: "NOPE" };
    }
    appendActivations(resultA.bots.player2.activations);

    const resultB = await pool.runInPool({ 1: tree, 2: champion.tree });
    if (!resultConsideredWinning({ result: resultB, incumbent: 2, challenger: 1 })) {
      return { outcome: "NOPE" };
    }
    appendActivations(resultA.bots.player1.activations);
  }

  return {
    outcome: "YES",
    activations,
  };
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
