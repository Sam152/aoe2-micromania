import { defaultState as defaultGameState, gameStateMutator } from "../../state/gameState.ts";
import { GameState, GameStateAction } from "../../../types.ts";
import { createComputedTickState } from "../../state/computed/createComputedTickState.ts";
import { triggerBotTicks } from "../integration/triggerBotTicks.ts";
import { config } from "../../config.ts";
import { hpByPlayer } from "../../util/hpByPlayer.ts";
import { UnitAwareBehaviourTree } from "../behaviourTree/BehaviourTree.ts";
import { createBot } from "../integration/createBot.ts";

const MAX_TIME_MINUTES = 3;

type DetermineWinnerArgs = {
  a: UnitAwareBehaviourTree;
  b: UnitAwareBehaviourTree;
};

type DetermineWinnerResult = {
  state: GameState;
  hp: Record<string, number>;
  actionLog: GameStateAction[];
};

export function determineWinner({ a, b }: DetermineWinnerArgs): DetermineWinnerResult {
  const state = defaultGameState();
  const actionLog: GameStateAction[] = [];

  const dispatch = (action: GameStateAction) => {
    actionLog.push(action);
    const computed = createComputedTickState(state);

    if (action.n === "T") {
      triggerBotTicks(bots, state, dispatch, computed);
    }
    gameStateMutator(state, action, computed);
  };

  const bots = [a, b].map((tree, i) => {
    const playerId = `bot-${i}`;
    dispatch({
      n: "CLIENT_LOADED_WITH_ID",
      playerId: `bot-${i}`,
    });
    const playingAs = state.activePlayers[playerId];
    return createBot({
      playingAs,
      playerId,
      tree,
    });
  });

  let ticks = 0;
  while (true) {
    dispatch({ n: "T", t: ++ticks });

    // Two minutes should be enough.
    if (state.ticks === config.ticksPerSecond * 60 * MAX_TIME_MINUTES) {
      break;
    }
  }

  return {
    actionLog,
    state,
    hp: hpByPlayer(state),
  };
}
