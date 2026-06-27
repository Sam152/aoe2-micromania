import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { promoteChampion } from "../infra/repo/promoteChampion.ts";
import { getAllChampions } from "../infra/repo/getAllChampions.ts";
import { createGameWorkerPool } from "../tournament/createGameWorkerPool.ts";

import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { upsertActivations } from "../infra/repo/upsertActivations.ts";

const { CPU_WORKER_COUNT } = params;

export async function startPromotionHarness() {
  const promoted = await promoteChampion();
  console.log(`Promoted bot ${promoted.id}`);

  // Record a game for the promoted champion against all prior champions,
  // so its activations are present, not just against its peer generation.
  const champions = await getAllChampions();

  const { runInPool, terminatePool } = createGameWorkerPool(CPU_WORKER_COUNT);

  console.log(`Recording activations against champion pool`);
  const progress = createProgressFormatter({ totalIterations: champions.length });

  await Promise.all(champions.map(async (champion) => {
    const result = await runInPool({
      1: promoted.tree,
      2: champion.tree,
    });
    await upsertActivations(promoted.id, result.bots.player1.activations);
    progress.advance();
  }));

  terminatePool();
}

if (import.meta.main) {
  startPromotionHarness().then(() => sql.end());
}
