import { GameState } from "../../../../types.ts";
import { BotState } from "../state/BotState.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";

export function computeBlackboard(
  { gameState, botState }: { gameState: GameState; botState: BotState },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
