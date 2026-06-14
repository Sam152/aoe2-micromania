import { sql } from "../infra/connection.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { chunkArray } from "../../../util/chunckArray.ts";
import { roundRobin } from "../tournament/roundRobin.ts";
import { recordResult } from "../tournament/recordResult.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";

export async function startTournamentHarness() {
  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);
  const botsInPool = await getActiveBotsByElo();

  const { advance } = createProgressFormatter({
    totalIterations: Math.floor(botsInPool.length / TOURNEY_ROUND_ROBIN_SIZE) *
        ((TOURNEY_ROUND_ROBIN_SIZE * (TOURNEY_ROUND_ROBIN_SIZE - 1)) / 2) +
      ((botsInPool.length % TOURNEY_ROUND_ROBIN_SIZE) *
          ((botsInPool.length % TOURNEY_ROUND_ROBIN_SIZE) - 1)) /
        2,
  });

  // Play a single set of round robins. Matching similar ELO bots against
  // each-other. Probably need to play multiple of these, to allow bots
  // to rise in ELO.
  await Promise.all(
    chunkArray(botsInPool, TOURNEY_ROUND_ROBIN_SIZE)
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

if (import.meta.main) {
  startTournamentHarness().then(() => sql.end());
}
