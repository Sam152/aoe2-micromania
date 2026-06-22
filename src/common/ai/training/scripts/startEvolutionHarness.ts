import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";
import { getCurrentGenerationNumber } from "../infra/repo/getCurrentGenerationNumber.ts";
import { insertGenerationZero } from "../infra/repo/insertGenerationZero.ts";
import { getAllChampions } from "../infra/repo/getAllChampions.ts";
import { getAllInactiveBots } from "../infra/repo/getAllInactiveBots.ts";
import { emptyTree } from "../../behaviourTree/__fixtures__/emptyTree.ts";

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
    await insertGenerationZero(emptyTree);
  }

  const champions = await getAllChampions();
  const previousBots = await getAllInactiveBots();
  const generation = await getCurrentGenerationNumber() + 1;
  console.log(`Evolving ${requiredBots} generation ${generation} bots\n`);

  await evolveNextGeneration({ champions, newBotsRequired: requiredBots, generation, previousBots });
}

if (import.meta.main) {
  startEvolutionHarness().then(() => sql.end());
}
