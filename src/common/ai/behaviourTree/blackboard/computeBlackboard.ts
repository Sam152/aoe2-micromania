import { GameState } from "../../../../types.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";
import { BotState } from "../../integration/createBot.ts";

export function computeBlackboard(
  { gameState, botState }: { gameState: GameState; botState: BotState },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
