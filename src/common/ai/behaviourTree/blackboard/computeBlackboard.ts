import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";
import { Blackboard } from "./blackboard.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinition.ts";

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): BlackboardValuesFromDefinition<Blackboard> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
