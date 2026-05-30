import { AgentState } from "../behaviourTree/state/AgentState.ts";

export function createAgent({ playingAs }: { playingAs: number }) {
  const agentState: AgentState = {
    playingAs: playingAs,
    lastActionType: "IDLE",
    lastActionTick: 0,
  };
}
