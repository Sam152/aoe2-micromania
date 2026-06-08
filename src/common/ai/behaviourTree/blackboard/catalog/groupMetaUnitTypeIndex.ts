import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

/**
 * An index identifying an index for a group of a particular type.
 */
export const groupMetaUnitTypeIndex = defineBlackboardValue({
  dataType: "number",
  params: {},
  resolve: ({ botState, group }) =>
    Object.values(botState.unitGroups)
      .filter((arrGroup) => arrGroup.unitType === group.unitType)
      .findIndex((arrGroup) => arrGroup === group),
});
