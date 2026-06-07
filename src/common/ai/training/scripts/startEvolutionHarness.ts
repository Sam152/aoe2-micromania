import { sql } from "../infra/connection.ts";
import { params } from "../params.ts";
import { activeBotsCount } from "../infra/repo/activeBotsCount.ts";
import { sampleTree } from "../../behaviourTree/__fixtures__/sampleTree.ts";
import { setLowestRatedPlayersToInactive } from "../infra/repo/setLowestRatedPlayersToInactive.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { getActiveBotsByElo } from "../infra/repo/getActiveBotsByElo.ts";
import { evolveNextGeneration } from "../evolution/evolveNextGeneration.ts";
import { insertBot } from "../infra/repo/insertBot.ts";
import { createProgressFormatter } from "../utils/createProgressFormatter.ts";
import { getCurrentGenerationNumber } from "../infra/repo/getCurrentGenerationNumber.ts";
import { getFewestNumberOfGamesPlayedByActiveBots } from "../infra/repo/getFewestNumberOfGamesPlayedByActiveBots.ts";

const { NEXT_GENERATION_CHURN_PERCENTAGE, TARGET_TOTAL_BOTS_IN_POOL, NEXT_GENERATION_MINIMUM_GAMES_PLAYED } = params;

export async function startEvolutionHarness() {
  // Require all bots in the active player pool to have played a minimum number of games.
  const minGamesPlayed = await getFewestNumberOfGamesPlayedByActiveBots();
  if (minGamesPlayed < NEXT_GENERATION_MINIMUM_GAMES_PLAYED) {
    console.log(
      `Skipping evolution: ${minGamesPlayed} games played is less than minimum of ${NEXT_GENERATION_MINIMUM_GAMES_PLAYED}`,
    );
    return;
  }

  const botCount = await activeBotsCount();
  const generation = await getCurrentGenerationNumber() + 1;
  console.log(`Total bots in pool: ${botCount}`);

  if (botCount >= TARGET_TOTAL_BOTS_IN_POOL) {
    const retiringCount = (NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount;
    console.log(`Retiring count: ${retiringCount}`);
    await setLowestRatedPlayersToInactive((NEXT_GENERATION_CHURN_PERCENTAGE / 100) * botCount);
  }

  // Start all training from a single reference tree.
  if (botCount === 0) {
    console.log(`Inserted genesis bot`);
    await insertBot(sampleTree, 0);
  }

  const requiredBots = TARGET_TOTAL_BOTS_IN_POOL - await activeBotsCount();
  const specimens: UnitAwareBehaviourTree[] = (await getActiveBotsByElo()).map((bot) => bot.tree);
  console.log(`Evolving ${requiredBots} bots from ${specimens.length} specimens`);

  const formatter = createProgressFormatter({ totalIterations: requiredBots });
  await Promise.allSettled(
    evolveNextGeneration({ specimens, newPlayersRequired: requiredBots }).map(async (nextGeneration) => {
      await insertBot(await nextGeneration, generation);
      formatter.advance();
    }),
  );
}

startEvolutionHarness().then(() => sql.end());
