import { sql } from "../infra/connection.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { roundRobin } from "../tournament/roundRobin.ts";
import { recordResult } from "../tournament/recordResult.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { params } from "../params.ts";
import { roundRobinSize } from "../tournament/roundRobinSize.ts";
import { getAllBots } from "../infra/repo/getAllBots.ts";

const { CPU_WORKER_COUNT } = params;

/**
 * Play a single round-robin against all active bots in the pool.
 */
export async function startTournamentHarness(invertPositions: boolean) {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);
  const tourneyBots = await getAllBots();

  const { advance } = createProgressFormatter({
    totalIterations: roundRobinSize(tourneyBots.length),
    scaleFactor: 100,
  });

  await Promise.all(
    roundRobin(tourneyBots, async (playerA, playerB) => {
      if (invertPositions) {
        const result = await runInPool({ 1: playerA.tree, 2: playerB.tree });
        await recordResult({
          players: [playerA, playerB],
          result,
        });
      } else {
        const result = await runInPool({ 1: playerB.tree, 2: playerA.tree });
        await recordResult({
          players: [playerB, playerA],
          result,
        });
      }

      advance();
    }),
  );

  terminatePool();
}

if (import.meta.main) {
  startTournamentHarness(false).then(() => sql.end());
}
