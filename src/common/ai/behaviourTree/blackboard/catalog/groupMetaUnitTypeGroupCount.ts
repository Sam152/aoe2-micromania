import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

/**
 * Counts the number of groups, for the group type being acted on.
 */
export const groupMetaUnitTypeGroupCount = defineBlackboardValue({
  dataType: "unitCount",
  params: {},
  resolve: ({ botState, group }) => {
    return Object.values(botState.unitGroups).filter((botGroup) => botGroup.unitType === group.unitType).length;
  },
});
