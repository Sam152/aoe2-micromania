import { sql } from "../infra/connection.ts";
import { trainingParams } from "../trainingParams.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { setLowestRatedPlayersToInactive } from "../infra/repo/setLowestRatedPlayersToInactive.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { breedNextGeneration } from "../seeding/breedNextGeneration.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";

const { NEXT_GENERATION_CHURN_PERCENTAGE, TARGET_TOTAL_BOTS_IN_POOL } = trainingParams;

async function startBreedingHarness() {
  const botCount = await activeBotsCount();
  console.log(`Total bots: ${botCount}`);

  if (botCount >= TARGET_TOTAL_BOTS_IN_POOL) {
    const retiringCount = (NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount;
    console.log(`Retiring count: ${retiringCount}`);
    await setLowestRatedPlayersToInactive((NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount);
  }

  const requiredBots = TARGET_TOTAL_BOTS_IN_POOL - await activeBotsCount();
  const specimens: UnitAwareBehaviourTree[] = botCount === 0
    ? [sampleTree]
    : (await getActiveBotsByElo()).map((bot) => bot.tree);

  const formatter = createProgressFormatter({ totalIterations: requiredBots });
  await Promise.allSettled(
    breedNextGeneration({ specimens, newPlayersRequired: requiredBots }).map(async (nextGeneration) => {
      await insertBot(await nextGeneration);
      formatter.advance();
    }),
  );
}

startBreedingHarness().then(() => sql.end());
