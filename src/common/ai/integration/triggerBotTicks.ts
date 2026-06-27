import { BotInstance } from "./createBot.ts";
import { GameDispatcher, GameState } from "../../../types.ts";
import { ComputedTickState } from "../../state/computed/createComputedTickState.ts";

const TICK_INTERVAL = 5;

export function triggerBotTicks(
  bots: BotInstance[],
  state: GameState,
  dispatcher: GameDispatcher,
  computed: ComputedTickState,
) {
  bots.forEach((bot) => {
    if (state.ticks % TICK_INTERVAL === 0) {
      bot.tick(state, dispatcher, computed);
    }
  });
}
