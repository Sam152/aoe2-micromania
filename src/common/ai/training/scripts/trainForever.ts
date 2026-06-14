import { params } from "../params.ts";
import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";
import { startPruningHarness } from "./startPruningHarness.ts";

import { startPromotionHarness } from "./startPromotionHarness.ts";

const { TOURNEY_ROUND_ROBIN_COUNT } = params;

async function trainForever() {
  while (true) {
    console.log("\n---- EVOLVE ----");
    await startEvolutionHarness();

    console.log("\n---- TOURNAMENT ----");
    for (let i = 0; i < TOURNEY_ROUND_ROBIN_COUNT; i++) {
      console.log(`Starting ${i + 1} of ${TOURNEY_ROUND_ROBIN_COUNT}`);
      await startTournamentHarness();
    }

    console.log("\n---- PROMOTING CHAMPION ----");
    await startPromotionHarness();

    console.log("\n---- PRUNE ----");
    await startPruningHarness();
  }
}

if (import.meta.main) {
  trainForever();
}
