import { BotInstance } from "../integration/createBot.ts";
import { defaultState as defaultGameState, gameStateMutator } from "../../state/gameState.ts";
import { GameState, GameStateAction } from "../../../types.ts";
import { createComputedTickState } from "../../state/computed/createComputedTickState.ts";
import { triggerBotTicks } from "../integration/triggerBotTicks.ts";

type DetermineWinnerArgs = {
  bots: BotInstance[];
};

type DetermineWinnerResult = {
  state: GameState;
  hp: Record<string, number>;
  actionLog: GameStateAction[];
};

export function determineWinner({ bots }: DetermineWinnerArgs) {
  const state = defaultGameState();
  const actionLog: GameStateAction[] = [];

  const dispatch = (action: GameStateAction) => {
    actionLog.push(action);
    console.log(action);
    const computed = createComputedTickState(state);
    triggerBotTicks(bots, state, dispatch, computed);
    gameStateMutator(state, action, computed);
  };

  let ticks = 0;
  while (true) {
    dispatch({ n: "T", t: ++ticks });
  }

  return {
    actionLog,
    state,
  };
}
