import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";
import { arrayOfSize } from "../../../util/arrayOfSize.ts";

import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { generateCandidateTree } from "./candidates/generateCandidateTree.ts";
import { canBeatAllChampions } from "./canBeatAllChampions.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";

const { CPU_WORKER_COUNT } = params;

type EvolveNextGenArgs = {
  champions: Bot[];
  previousBots: Bot[];
  newBotsRequired: number;
  generation: number;
};

export async function evolveNextGeneration(
  { champions, newBotsRequired, generation, previousBots }: EvolveNextGenArgs,
): Promise<UnitAwareBehaviourTree[]> {
  const pool = createGameWorkerPool(CPU_WORKER_COUNT);

  const winners: UnitAwareBehaviourTree[] = [];
  const enough = () => winners.length >= newBotsRequired;

  let iterationsSinceLastWin = 0;
  let progressFormatter = createProgressFormatter({ scaleFactor: 100 });

  await Promise.all(
    arrayOfSize(CPU_WORKER_COUNT).map(async () => {
      while (!enough()) {
        const candidate = generateCandidateTree({
          iterationsSinceLastWin: iterationsSinceLastWin++,
          previousBots,
        });

        if (await canBeatAllChampions({ champions, tree: candidate, pool }) && !enough()) {
          winners.push(candidate);
          // Reset the search radius: finding a winner proves the current neighbourhood is
          // productive, so the next search should start cheap again rather than stay drifted out.
          console.log(
            `\n(${winners.length}/${newBotsRequired}) Beat ${champions.length} champions after ${iterationsSinceLastWin} iterations`,
          );
          iterationsSinceLastWin = 0;
          progressFormatter = createProgressFormatter({ scaleFactor: 100 });
          await insertBot(candidate, generation);
        }

        progressFormatter.advance();
      }
    }),
  );

  pool.terminatePool();
  return winners;
}
