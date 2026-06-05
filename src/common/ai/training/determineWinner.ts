import { BotInstance } from "../integration/createBot.ts";
import { defaultState as defaultGameState } from "../../state/gameState.ts";

type DetermineWinnerArgs = {
  botA: BotInstance;
  botB: BotInstance;
};

export function determineWinner(args: DetermineWinnerArgs) {
  const state = defaultGameState();
}
