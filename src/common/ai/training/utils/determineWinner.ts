import { defaultState as defaultGameState, gameStateMutator } from "../../../state/gameState.ts";
import { GameStateAction } from "../../../../types.ts";
import { createComputedTickState } from "../../../state/computed/createComputedTickState.ts";
import { triggerBotTicks } from "../../integration/triggerBotTicks.ts";
import { config } from "../../../config.ts";
import { hpByPlayer } from "../../../util/hpByPlayer.ts";
import { UnitAwareBehaviourTree } from "../../behaviourTree/BehaviourTree.ts";
import { BotState, createBot } from "../../integration/createBot.ts";
import { params } from "../params.ts";

const { MAX_GAME_TIME_MINUTES } = params;

type DetermineWinnerArgs = {
  player1: UnitAwareBehaviourTree;
  player2: UnitAwareBehaviourTree;
};

export type GameResult = {
  hp: { 1: number; 2: number };
  winner: 1 | 2 | "DRAW";
  ticks: number;
  bots: {
    player1: BotState;
    player2: BotState;
  };
};

export function determineWinner({ player1, player2 }: DetermineWinnerArgs): GameResult {
  const state = defaultGameState();

  const dispatch = (action: GameStateAction) => {
    const computed = createComputedTickState(state);

    if (action.n === "T") {
      triggerBotTicks(bots, state, dispatch, computed);
    }
    gameStateMutator(state, action, computed);
  };

  const bots = [player1, player2].map((tree, i) => {
    const playerId = `bot-${i + 1}`;

    dispatch({
      n: "CLIENT_LOADED_WITH_ID",
      playerId,
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

    if (state.ticks === config.ticksPerSecond * 60 * MAX_GAME_TIME_MINUTES) {
      break;
    }

    const hp = hpByPlayer(state);
    if (hp[1] === 0 || hp[2] === 0) {
      break;
    }
  }

  const hp = hpByPlayer(state) as GameResult["hp"];
  return {
    bots: {
      player1: bots[0].botState,
      player2: bots[1].botState,
    },
    winner: hp[1] === hp[2] ? "DRAW" : hp[1] > hp[2] ? 1 : 2,
    hp,
    ticks: state.ticks,
  };
}
