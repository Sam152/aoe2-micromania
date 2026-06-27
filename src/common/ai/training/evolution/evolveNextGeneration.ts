import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";
import { arrayOfSize } from "../../../util/arrayOfSize.ts";

import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { generateCandidateTree } from "./candidates/generateCandidateTree.ts";
import { canBeatAllChampions } from "./canBeatAllChampions.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter, formatNumber } from "../utils/createProgressFormatter.ts";

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

  await Promise.all(
    arrayOfSize(CPU_WORKER_COUNT).map(async () => {
      while (!enough()) {
        const candidate = generateCandidateTree({
          iterationsSinceLastWin: iterationsSinceLastWin++,
          borrowBots: borrowBots,
          startingPoint: activeBots.at(0)!,
        });

        if (await canBeatAllChampions({ champions: activeBots, tree: candidate, pool }) && !enough()) {
          // Reset the search radius: finding a winner proves the current neighbourhood is
          // productive, so the next search should start cheap again rather than stay drifted out.
          console.log(
            `\nBeat ${activeBots.length} champions after ${formatNumber(iterationsSinceLastWin)} iterations`,
          );
          iterationsSinceLastWin = 0;
          progressFormatter = createProgressFormatter({ scaleFactor: 100 });
          await insertBot(candidate, generation, activeBots[0]!.groupName);
          winners.push(candidate);
        }

        progressFormatter.advance();
      }
    }),
  );

  pool.terminatePool();
  return winners.length > 0 ? "INSERTED_NEXT_GEN" : "EXCEEDED_MAX_ITERATIONS";
}
