import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";

import { Blackboard, BlackboardValuesFromDefinition } from "./Blackboard.ts";

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): BlackboardValuesFromDefinition<Blackboard> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
