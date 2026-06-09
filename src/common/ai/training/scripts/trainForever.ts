import { params } from "../params.ts";
import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";
import { startPruningHarness } from "./startPruningHarness.ts";
import { resetActiveBotsElo } from "../infra/repo/resetActiveBotsElo.ts";

const { TOURNEY_ROUND_ROBIN_SIZE, NEXT_GENERATION_MINIMUM_GAMES_PLAYED, TOURNEY_MIN_TOURNEY_COUNT } = params;

async function trainForever() {
  const requiredTourneys = Math.max(
    TOURNEY_MIN_TOURNEY_COUNT,
    Math.ceil(NEXT_GENERATION_MINIMUM_GAMES_PLAYED / (TOURNEY_ROUND_ROBIN_SIZE - 1)),
  );

  while (true) {
    console.log("\n---- EVOLVE ----");
    await startEvolutionHarness();

    console.log("\n---- RESETTING ELO ----");
    await resetActiveBotsElo();

    console.log("\n---- TOURNAMENT ----");
    for (let i = 0; i < requiredTourneys; i++) {
      console.log(`Starting ${i + 1} of ${requiredTourneys}`);
      await startTournamentHarness();
    }

    console.log("\n---- PRUNE ----");
    await startPruningHarness();
  }
}

if (import.meta.main) {
  trainForever();
}
