import { Bot } from "../../infra/repo/utils/botRowToBot.ts";
import { params } from "../../params.ts";
import { randomArray } from "../../../../util/randomArray.ts";

const { BOT_SELECTION_ITERATION_BEFORE_LOOKING_AT_PRIOR_GENERATION, BOT_SELECTION_BOTS_PER_GENERATION_TO_CONSIDER } =
  params;

export function selectStartingTreeFromBots(
  { iterationsSinceLastWin, previousBots }: {
    iterationsSinceLastWin: number;
    previousBots: Bot[];
  },
): Bot {
  const tranche = Math.floor(iterationsSinceLastWin / BOT_SELECTION_ITERATION_BEFORE_LOOKING_AT_PRIOR_GENERATION);
  const generationsToConsider = Math.max(1, tranche);
  const botsPerGeneration = tranche === 0 ? 1 : BOT_SELECTION_BOTS_PER_GENERATION_TO_CONSIDER;

  const generations = [...new Set(previousBots.map((bot) => bot.generation))]
    .sort((a, b) => b - a)
    .slice(0, generationsToConsider);

  const candidates = generations.flatMap((generation) =>
    previousBots
      .filter((bot) => bot.generation === generation)
      .sort((a, b) => b.elo - a.elo)
      .slice(0, botsPerGeneration)
  );

  return randomArray(candidates);
}
