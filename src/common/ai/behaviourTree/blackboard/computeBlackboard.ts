import { GameState } from "../../../../types.ts";
import { BlackboardDefinition } from "./blackboardDefinition.ts";
import { BlackboardValuesFromDefinition } from "./BlackboardDefinitionShape.ts";
import { BotState, BotUnitGroup } from "../../integration/createBot.ts";

export function computeBlackboard(
  { state, botState, group }: { state: GameState; botState: BotState; group: BotUnitGroup },
): BlackboardValuesFromDefinition<BlackboardDefinition> {
  return {
    groupsForUnitTypeCount:
      Object.values(botState.unitGroups).filter((botGroup) => botGroup.unitType === group.unitType).length,
    unitTypeGroupIndex: Object.values(botState.unitGroups)
      .filter((arrGroup) => arrGroup.unitType === group.unitType)
      .findIndex((arrGroup) => arrGroup === group),
    unitsInGroupCount: group.includedUnits.length,
    unitsOfTypeGlobalCount: state.units.filter((unit) => unit.ownedByPlayer === botState.playingAs).length,
  };
}
