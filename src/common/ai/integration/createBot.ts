import { AgentState } from "../behaviourTree/state/AgentState.ts";
import { GameDispatcher, GameState } from "../../../types.ts";

export type BotInstance = {
  makeDecision: (state: GameState, dispatcher: GameDispatcher) => void;
  playerId: string;
};

export function createBot({ playingAs, playerId }: { playingAs: number; playerId: string }): BotInstance {
  const agentState: AgentState = {
    playingAs: playingAs,
    lastActionType: "IDLE",
    lastActionTick: 0,
  };

  return {
    playerId,
    makeDecision: (state, dispatcher) => {
    },
  };
}
