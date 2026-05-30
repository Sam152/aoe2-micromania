import { BotState } from "../behaviourTree/state/BotState.ts";
import { GameDispatcher, GameState } from "../../../types.ts";

import { tickUnitGroupDecisions } from "./tickUnitGroupDecisions.ts";

export type BotInstance = {
  tick: (state: GameState, dispatcher: GameDispatcher) => void;
  playerId: string;
};

export function createBot({ playingAs, playerId }: { playingAs: number; playerId: string }): BotInstance {
  const botState: BotState = {
    isEligibleForDecision: true,
    playingAs: playingAs,
    lastActionType: "IDLE",
    lastActionTick: 0,
    actionQueue: [],
  };

  return {
    playerId,
    tick: (state, dispatcher) => {
      // @todo split unit types into groups, run for each groups.
      // @todo allow groups to be split apart and combined.
      const actionQueue = botState.actionQueue;
      tickUnitGroupDecisions({
        actionQueue,
        state,
        dispatcher,
        botState,
      });
    },
  };
}
