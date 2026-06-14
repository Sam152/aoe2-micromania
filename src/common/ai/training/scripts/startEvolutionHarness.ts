import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";

import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";

import { getCurrentGenerationNumber } from "../infra/repo/getCurrentGenerationNumber.ts";
import { insertGenerationZero } from "../infra/repo/insertGenerationZero.ts";
import { getAllChampions } from "../infra/repo/getAllChampions.ts";

const { TOTAL_BOTS_PER_GENERATION } = params;

export async function startEvolutionHarness() {
  const botCount = await activeBotsCount();
  const requiredBots = Math.max(0, TOTAL_BOTS_PER_GENERATION - await activeBotsCount());
  console.log(`Total bots in pool: ${botCount}, ${requiredBots} required`);

  if (requiredBots === 0) {
    return;
  }

  if ((await getAllChampions()).length === 0) {
    console.log(`No champions found, inserting gen 0`);
    await insertGenerationZero(sampleTree);
  }

  const champions = await getAllChampions();
  const generation = await getCurrentGenerationNumber() + 1;
  console.log(`Evolving ${requiredBots} generation ${generation} bots\n`);

  await evolveNextGeneration({ champions, newBotsRequired: requiredBots, generation });
}

if (import.meta.main) {
  startEvolutionHarness().then(() => sql.end());
}
