import { params } from "../params.ts";
import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";
import { startPruningHarness } from "./startPruningHarness.ts";

import { startPromotionHarness } from "./startPromotionHarness.ts";
import { retireAllBots } from "../infra/repo/retireAllBots.ts";
import { createTimer } from "../utils/createTimer.ts";

const { TOURNEY_ROUND_ROBIN_COUNT } = params;

async function trainForever() {
  while (true) {
    console.log("\n---- EVOLVE ----");
    const evolveTimer = createTimer("Evolution");
    await startEvolutionHarness();
    evolveTimer();

    console.log("\n---- TOURNAMENT ----");
    for (let i = 0; i < TOURNEY_ROUND_ROBIN_COUNT; i++) {
      console.log(`Starting ${i + 1} of ${TOURNEY_ROUND_ROBIN_COUNT}`);
      await startTournamentHarness();
    }

    console.log("\n---- PROMOTING CHAMPION ----");
    await startPromotionHarness();

    console.log("\n---- PRUNE ----");
    await startPruningHarness();

    console.log("\n---- RETIRE ----");
    await retireAllBots();
    console.log("Retired all bots - ready to start a new generation");
  }
}

async function step(name: string, step: () => Promise<void>) {
  console.log(`---- ${name} ----`);
  const timer = createTimer();
  await step();
  timer();
}

if (import.meta.main) {
  trainForever();
}
