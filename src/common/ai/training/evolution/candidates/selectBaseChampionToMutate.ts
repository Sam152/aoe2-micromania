import { Bot } from "../../infra/repo/utils/botRowToBot.ts";
import { params } from "../../params.ts";

const { NEXT_GENERATION_CHAMPION_LOOKBACK_ITERATION_STEP_AMOUNT } = params;

export function selectBaseChampionToMutate(
  { iterationsSinceLastWin, champions }: {
    iterationsSinceLastWin: number;
    champions: Bot[];
  },
): Bot {
  const lookback = Math.min(
    champions.length,
    1 + Math.floor(iterationsSinceLastWin / NEXT_GENERATION_CHAMPION_LOOKBACK_ITERATION_STEP_AMOUNT),
  );
  return champions[Math.floor(Math.random() * lookback)];
}
