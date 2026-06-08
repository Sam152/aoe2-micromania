import { defineCondition } from "../ConditionDefinition.ts";

export const unitCountEquals = defineCondition({
  params: {
    leftUnitCount: {
      dataType: "unitCount",
    },
    rightUnitCount: {
      dataType: "unitCount",
    },
  },
  evaluate: ({ leftUnitCount, rightUnitCount }) => leftUnitCount === rightUnitCount,
});
