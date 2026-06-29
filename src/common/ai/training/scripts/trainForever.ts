import { startEvolutionHarness } from "./startEvolutionHarness.ts";
import { startTournamentHarness } from "./startTournamentHarness.ts";

import { createTimer } from "../utils/createTimer.ts";

async function trainForever() {
  while (true) {
    await step("EVOLVE", startEvolutionHarness);

    // Play every bot we have, in a double round-robin.
    await step("TOURNAMENT", () => startTournamentHarness(false));
    await step("TOURNAMENT (INVERTED)", () => startTournamentHarness(true));

    // Don't prune, because we now prune when selecting a candidate.
    // We may also not need to store activations in the database anymore.
    // await step("PRUNE", startPruningHarness);
  }
}

async function step(name: string, step: () => Promise<void>) {
  console.log(`\n---- ${name} ----`);
  const timer = createTimer();
  await step();
  timer();
}

if (import.meta.main) {
  trainForever();
}
