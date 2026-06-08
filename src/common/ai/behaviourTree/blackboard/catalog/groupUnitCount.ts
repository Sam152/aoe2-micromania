import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

/**
 * The total number of units in a given group.
 */
export const groupUnitCount = defineBlackboardValue({
  dataType: "count",
  params: {},
  resolve: ({ group }) => group.includedUnits.length,
});
