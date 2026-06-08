import { defineCondition } from "../ConditionDefinition.ts";

export const countGreaterThan = defineCondition({
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
