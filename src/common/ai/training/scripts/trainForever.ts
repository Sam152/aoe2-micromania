import { params } from "../params.ts";
import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";
import { startPruningHarness } from "./startPruningHarness.ts";

const { NEXT_GENERATION_CHURN_PERCENTAGE, TARGET_TOTAL_BOTS_IN_POOL, NEXT_GENERATION_MINIMUM_GAMES_PLAYED } = params;

async function trainForever() {
  const tourneysRequired = 1;

  while (true) {
    await startEvolutionHarness();

    for (let i = 0; i < tourneysRequired; i++) {
      await startTournamentHarness();
    }

    await startPruningHarness();
  }

  // Start evolution.
  // Calculate how many games must be played to reach the evolve threshold.
  // Run the tournaments N times.
  // Run the pruner.
  // Repeat.
}
