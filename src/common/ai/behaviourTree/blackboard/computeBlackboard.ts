import { GameState } from "../../../../types.ts";
import { BotState } from "../state/BotState.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export function computeBlackboard(
  { gameState, agentState }: { gameState: GameState; agentState: BotState },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
