import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";

import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";
import { insertBot } from "../infra/repo/insertBot.ts";

import { getCurrentGenerationNumber } from "../infra/repo/getCurrentGenerationNumber.ts";
import { promoteToGenerationChampion } from "../infra/repo/promoteToGenerationChampion.ts";
import { retireAllBots } from "../infra/repo/retireAllBots.ts";
import { getAllChampions } from "../infra/repo/getAllChampions.ts";

const { TOTAL_BOTS_PER_GENERATION } = params;

export async function startEvolutionHarness() {
  const botCount = await activeBotsCount();
  console.log(`Total bots in pool: ${botCount}`);

  const requiredBots = Math.max(0, TOTAL_BOTS_PER_GENERATION - await activeBotsCount());

  if (requiredBots === 0) {
    return;
  }

  if (botCount === 0) {
    await promoteToGenerationChampion(await insertBot(sampleTree, 0));
    await retireAllBots(0);
    console.log(`Created generation 0`);
  }

  const champions = await getAllChampions();
  const generation = await getCurrentGenerationNumber() + 1;
  console.log(`Evolving ${requiredBots} generation ${generation} bots from ${champions.length} champions`);

  await Promise.allSettled(
    evolveNextGeneration({ champions: champions, newBotsRequired: requiredBots }).map(
      async (nextGeneration) => {
        await insertBot(await nextGeneration, generation);
      },
    ),
  );
}

if (import.meta.main) {
  startEvolutionHarness().then(() => sql.end());
}
