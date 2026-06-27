import { sql } from "../infra/connection.ts";
import { getAllActiveBots } from "../infra/repo/getAllActiveBots.ts";
import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";
import { getCurrentGenerationNumber } from "../infra/repo/getCurrentGenerationNumber.ts";
import { insertGenerationZero } from "../infra/repo/insertGenerationZero.ts";
import { getAllBorrowBots } from "../infra/repo/getAllBorrowBots.ts";
import { emptyTree } from "../../behaviourTree/__fixtures__/emptyTree.ts";
import { retireAllBots } from "../infra/repo/retireAllBots.ts";
import { formatNumber } from "../utils/createProgressFormatter.ts";
import { params } from "../params.ts";

/**
 * Active bots: bots in the current group, which are currently being evolved.
 * Borrow bots: bots that should have their genetic traits borrowed from.
 */
export async function startEvolutionHarness() {
  // Seed the active bots with an empty tree.
  if ((await getAllActiveBots()).length === 0) {
    await insertGenerationZero(emptyTree);
  }

  while (true) {
    const activeBots = await getAllActiveBots();
    const borrowBots = await getAllBorrowBots();
    const generation = await getCurrentGenerationNumber() + 1;

    console.log(`\nEvolving group ${activeBots[0].groupName} generation ${generation}`);
    const nextGeneration = await evolveNextGeneration({ activeBots, generation, borrowBots });

    if (nextGeneration === "EXCEEDED_MAX_ITERATIONS") {
      console.log(
        `Exceeded max iterations ${
          formatNumber(params.NEXT_GENERATION_MAXIMUM_ITERATIONS_UNTIL_QUIT)
        }, exiting group training.`,
      );
      await retireAllBots();
      break;
    }
  }
}

if (import.meta.main) {
  startEvolutionHarness().then(() => sql.end());
}
