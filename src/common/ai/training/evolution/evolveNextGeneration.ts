import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";

import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { params } from "../params.ts";
import { arrayOfSize } from "../../../util/arrayOfSize.ts";

import { Bot } from "../infra/repo/utils/botRowToBot.ts";
import { createEvolutionCandidate } from "./createEvolutionCandidate.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";

const { CPU_WORKER_COUNT } = params;

type EvolveNextGenArgs = {
  champions: Bot[];
  newBotsRequired: number;
};

export function evolveNextGeneration(
  { champions, newBotsRequired }: EvolveNextGenArgs,
): Promise<UnitAwareBehaviourTree>[] {
  const pool = createGameWorkerPool(CPU_WORKER_COUNT);

  const progress = createProgressFormatter({ totalIterations: newBotsRequired });

  const nextGeneration = arrayOfSize(newBotsRequired).map(() =>
    createEvolutionCandidate({ champions, pool }).then((candidate) => {
      progress.advance();
      return candidate;
    })
  );

  Promise.all(nextGeneration).then(() => pool.terminatePool());

  return nextGeneration;
}
