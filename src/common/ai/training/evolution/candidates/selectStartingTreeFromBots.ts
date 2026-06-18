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
  const generationsToConsider = Math.max(
    1,
    Math.ceil(iterationsSinceLastWin / BOT_SELECTION_ITERATION_BEFORE_LOOKING_AT_PRIOR_GENERATION),
  );

  const generations = [...new Set(previousBots.map((bot) => bot.generation))]
    .sort((a, b) => b - a)
    .slice(0, generationsToConsider);

  const candidates = generations.flatMap((generation) =>
    previousBots
      .filter((bot) => bot.generation === generation)
      .sort((a, b) => b.elo - a.elo)
      .slice(0, BOT_SELECTION_BOTS_PER_GENERATION_TO_CONSIDER)
  );

  return randomArray(candidates);
}
