import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";
import { arrayOfSize } from "../../../util/arrayOfSize.ts";

import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { generateCandidateTree } from "./candidates/generateCandidateTree.ts";
import { canBeatAllChampions } from "./canBeatAllChampions.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter, formatNumber } from "../utils/createProgressFormatter.ts";
import { createTimer } from "../utils/createTimer.ts";
import { pruneUnitAwareTree } from "../../behaviourTree/utils/pruneTree.ts";

import { countUnitAwareBehaviourTreeNodes } from "../../behaviourTree/utils/countUnitAwareBehaviourTreeNodes.ts";

const { NEXT_GENERATION_MAXIMUM_ITERATIONS_UNTIL_QUIT, CPU_WORKER_COUNT } = params;

type EvolveNextGenArgs = {
  activeBots: Bot[];
  borrowBots: Bot[];
  generation: number;
};

export async function evolveNextGeneration(
  { activeBots, generation, borrowBots }: EvolveNextGenArgs,
): Promise<"INSERTED_NEXT_GEN" | "EXCEEDED_MAX_ITERATIONS"> {
  const pool = createGameWorkerPool(CPU_WORKER_COUNT);

  const winners: UnitAwareBehaviourTree[] = [];
  const enough = () => winners.length >= 1 || iterationsSinceLastWin > NEXT_GENERATION_MAXIMUM_ITERATIONS_UNTIL_QUIT;

  let iterationsSinceLastWin = 0;
  let progressFormatter = createProgressFormatter({ scaleFactor: 100 });
  const timer = createTimer(false);

  await Promise.all(
    arrayOfSize(CPU_WORKER_COUNT).map(async () => {
      while (!enough()) {
        const candidate = generateCandidateTree({
          iterationsSinceLastWin: iterationsSinceLastWin++,
          borrowBots,
          startingPoint: activeBots.at(0)!,
        });

        const result = await canBeatAllChampions({ champions: activeBots, tree: candidate, pool });
        if (result.outcome === "YES" && !enough()) {
          const pruned = pruneUnitAwareTree(candidate, result.activations);
          winners.push(pruned);

          // Re-try the pruned tree against the set of champions it beat, to prove the pruning
          // process did not destroy the capabilities of the tree. Any failure here indicates the
          // pruning process did not work.
          const prunedGameResult = await canBeatAllChampions({ champions: activeBots, tree: pruned, pool });
          if (prunedGameResult.outcome === "NOPE") {
            console.log("Original tree", JSON.stringify(candidate, null, 4));
            console.log("Pruned tree", JSON.stringify(pruned, null, 4));
            throw new Error("Pruned tree no longer capable of beating champions.");
          }

          const prunedNodeCount = countUnitAwareBehaviourTreeNodes(pruned);
          const prunedNodes = countUnitAwareBehaviourTreeNodes(candidate) - prunedNodeCount;

          console.log(
            [
              `\nBeat ${activeBots.length} champions after ${
                formatNumber(iterationsSinceLastWin)
              } iterations and ${timer()}`,
              `- pruned node count: ${formatNumber(prunedNodes)}`,
              `- resulting node count: ${formatNumber(prunedNodeCount)}`,
            ].join("\n"),
          );

          progressFormatter = createProgressFormatter({ scaleFactor: 100 });
          await insertBot(pruned, generation, activeBots[0]!.groupName, iterationsSinceLastWin);
          iterationsSinceLastWin = 0;
        }

        progressFormatter.advance();
      }
    }),
  );

  pool.terminatePool();
  return winners.length > 0 ? "INSERTED_NEXT_GEN" : "EXCEEDED_MAX_ITERATIONS";
}
