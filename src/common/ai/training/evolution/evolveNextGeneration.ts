import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";
import { arrayOfSize } from "../../../util/arrayOfSize.ts";

import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { generateCandidateTree } from "./generateCandidateTree.ts";
import { canBeatAllChampions } from "./canBeatAllChampions.ts";
import { insertBot } from "../infra/repo/insertBot.ts";

const { CPU_WORKER_COUNT } = params;

type EvolveNextGenArgs = {
  champions: Bot[];
  newBotsRequired: number;
  generation: number;
};

export async function evolveNextGeneration(
  { champions, newBotsRequired, generation }: EvolveNextGenArgs,
): Promise<UnitAwareBehaviourTree[]> {
  const pool = createGameWorkerPool(CPU_WORKER_COUNT);

  const winners: UnitAwareBehaviourTree[] = [];
  const enough = () => winners.length >= newBotsRequired;

  let iterationCount = 0;

  await Promise.all(
    arrayOfSize(CPU_WORKER_COUNT).map(async () => {
      while (!enough()) {
        const candidate = generateCandidateTree({ iterationCount: iterationCount++, champions });

        if (await canBeatAllChampions({ champions, tree: candidate, pool }) && !enough()) {
          winners.push(candidate);
          console.log(
            `(${winners.length}/${newBotsRequired}) Beat ${champions.length} champions after ${iterationCount} total iterations`,
          );
          await insertBot(candidate, generation);
        }
      }
    }),
  );

  pool.terminatePool();
  return winners;
}
