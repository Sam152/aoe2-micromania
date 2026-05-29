import { GameState } from "../../../../types.ts";
import { AgentState } from "../state/AgentState.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: AgentState },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
