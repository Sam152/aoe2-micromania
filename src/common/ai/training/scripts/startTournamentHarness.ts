import { sql } from "../infra/connection.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { chunkArray } from "../../../util/chunckArray.ts";
import { roundRobin } from "../tournament/roundRobin.ts";
import { recordResult } from "../tournament/recordResult.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { params } from "../params.ts";

const { TARGET_TOTAL_BOTS_IN_POOL, ROUND_ROBIN_TOURNEY_SIZE, CPU_WORKER_COUNT } = params;

async function startTournamentHarness() {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);
  const { advance } = createProgressFormatter({
    totalIterations: (TARGET_TOTAL_BOTS_IN_POOL / ROUND_ROBIN_TOURNEY_SIZE) *
      ((ROUND_ROBIN_TOURNEY_SIZE * (ROUND_ROBIN_TOURNEY_SIZE - 1)) / 2),
  });

  // Play a single set of round robins. Matching similar ELO bots against
  // each-other. Probably need to play multiple of these, to allow bots
  // to rise in ELO.
  await Promise.all(
    chunkArray(await getActiveBotsByElo(), ROUND_ROBIN_TOURNEY_SIZE)
      .flatMap((bots) =>
        roundRobin(bots, async (p1, p2) => {
          const result = await runInPool({ 1: p1.tree, 2: p2.tree });
          await recordResult({
            players: [p1, p2],
            result,
          });
          advance();
        })
      ),
  );

  terminatePool();
}

startTournamentHarness().then(() => sql.end());
