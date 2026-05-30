import { BotInstance } from "./createBot.ts";
import { GameDispatcher, GameState } from "../../../types.ts";

export function triggerBotTicks(bots: BotInstance[], state: GameState, dispatcher: GameDispatcher) {
  const tickInterval = 5;
  bots.forEach((bot) => {
    if (state.ticks % tickInterval === 0) {
      bot.tick(state, dispatcher);
    }
  });
}
