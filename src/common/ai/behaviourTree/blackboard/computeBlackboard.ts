import { GameState } from "../../../../types.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";

export function computeBlackboard(
  { gameState, botState, group }: { gameState: GameState; botState: BotState; group: BotUnitGroup },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    numberOfGroupsForGroupUnitType:
      Object.values(botState.unitGroups).filter((botGroup) => botGroup.unitType === group.unitType).length,
    distanceToClosestOpponent: 100,
    ticksSinceLastAction: 100,
  };
}
