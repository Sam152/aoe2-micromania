import { sql } from "../infra/connection.ts";
import { getAllBotsByElo } from "../infra/repo/getAllBotsByElo.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";
import { topUpPlayerPool } from "../tournament/topUpPlayerPool.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { chunkArray } from "../../../util/chunckArray.ts";
import { roundRobin } from "../tournament/roundRobin.ts";
import { recordResult } from "../tournament/recordResult.ts";
import { createProgressFormatter } from "../tournament/createProgressFormatter.ts";

const TOTAL_BOTS_IN_POOL = 500;
const BOTS_IN_EACH_TOURNEY = 100;
const MUTATION_COUNT = 50;
const WORKER_COUNT = 4;

async function startTournamentHarness() {
  await topUpPlayerPool({
    requiredPoolSize: TOTAL_BOTS_IN_POOL,
    baseTree: sampleTree,
    mutationCount: MUTATION_COUNT,
  });

  const { runInPool, terminatePool } = createGameWorkerPool(WORKER_COUNT);
  const { advance } = createProgressFormatter({
    totalIterations: (TOTAL_BOTS_IN_POOL / BOTS_IN_EACH_TOURNEY) *
      ((BOTS_IN_EACH_TOURNEY * (BOTS_IN_EACH_TOURNEY - 1)) / 2),
  });

  const bots = await getAllBotsByElo();

  await Promise.allSettled(
    chunkArray(bots, BOTS_IN_EACH_TOURNEY)
      .flatMap((bots) =>
        roundRobin(bots, async (p1, p2) => {
          const result = await runInPool(p1, p2);
          await recordResult({
            players: [p1, p2],
            result,
          });
          advance();
        })
      ),
  );

  // Run tournaments, give bots a chance to gain and lose ELO.
  // Cut the bottom 500 bots in the pool.

  terminatePool();
}

startTournamentHarness().then(() => sql.end());
