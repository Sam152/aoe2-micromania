import { defineCondition } from "../ConditionDefinition.ts";

export const unitCountGreaterThan = defineCondition({
  params: {
    leftCount: {
      dataType: "unitCount",
    },
    rightCount: {
      dataType: "unitCount",
    },
  },
  evaluate: ({ leftCount, rightCount }) => leftCount > rightCount,
});
