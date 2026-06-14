import { sql } from "../infra/connection.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";

import { roundRobin } from "../tournament/roundRobin.ts";
import { recordResult } from "../tournament/recordResult.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { params } from "../params.ts";
import { roundRobinSize } from "../tournament/roundRobinSize.ts";

const { CPU_WORKER_COUNT } = params;

/**
 * Play a single round-robin against all active bots in the pool.
 */
export async function startTournamentHarness() {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);
  const botsInPool = await getActiveBotsByElo();

  const { advance } = createProgressFormatter({
    totalIterations: roundRobinSize(botsInPool.length),
  });

  await Promise.all(
    roundRobin(botsInPool, async (p1, p2) => {
      const result = await runInPool({ 1: p1.tree, 2: p2.tree });
      await recordResult({
        players: [p1, p2],
        result,
      });
      advance();
    }),
  );

  terminatePool();
}

if (import.meta.main) {
  startTournamentHarness().then(() => sql.end());
}
