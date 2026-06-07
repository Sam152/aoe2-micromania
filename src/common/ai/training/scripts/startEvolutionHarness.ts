import { sql } from "../infra/connection.ts";
import { trainingParams } from "../trainingParams.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { setLowestRatedPlayersToInactive } from "../infra/repo/setLowestRatedPlayersToInactive.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";

const { NEXT_GENERATION_CHURN_PERCENTAGE, TARGET_TOTAL_BOTS_IN_POOL } = trainingParams;

async function startEvolutionHarness() {
  const botCount = await activeBotsCount();
  console.log(`Total bots in pool: ${botCount}`);

  if (botCount >= TARGET_TOTAL_BOTS_IN_POOL) {
    const retiringCount = (NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount;
    console.log(`Retiring count: ${retiringCount}`);
    await setLowestRatedPlayersToInactive((NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount);
  }

  // Start all training from a single reference tree.
  if (botCount === 0) {
    console.log(`Inserted genesis bot`);
    await insertBot(sampleTree);
  }

  const requiredBots = TARGET_TOTAL_BOTS_IN_POOL - await activeBotsCount();
  const specimens: UnitAwareBehaviourTree[] = (await getActiveBotsByElo()).map((bot) => bot.tree);
  console.log(`Evolving ${requiredBots} bots from ${specimens.length} specimens`);

  const formatter = createProgressFormatter({ totalIterations: requiredBots });
  await Promise.allSettled(
    evolveNextGeneration({ specimens, newPlayersRequired: requiredBots }).map(async (nextGeneration) => {
      await insertBot(await nextGeneration);
      formatter.advance();
    }),
  );
}

startEvolutionHarness().then(() => sql.end());
