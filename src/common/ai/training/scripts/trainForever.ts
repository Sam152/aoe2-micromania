import { params } from "../params.ts";
import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";
import { startPruningHarness } from "./startPruningHarness.ts";

const { ROUND_ROBIN_TOURNEY_SIZE, NEXT_GENERATION_MINIMUM_GAMES_PLAYED } = params;

async function trainForever() {
  const gamesPerTourney = (ROUND_ROBIN_TOURNEY_SIZE * (ROUND_ROBIN_TOURNEY_SIZE - 1)) / 2;
  const requiredTourneys = Math.ceil(NEXT_GENERATION_MINIMUM_GAMES_PLAYED / gamesPerTourney);

  while (true) {
    console.log("---- EVOLVE ----");
    await startEvolutionHarness();

    console.log("---- TOURNAMENT ----");
    for (let i = 0; i < requiredTourneys; i++) {
      await startTournamentHarness();
    }

    console.log("---- PRUNE ----");
    await startPruningHarness();
  }
}

if (import.meta.main) {
  trainForever();
}
