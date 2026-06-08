import { defineCondition } from "../ConditionDefinition.ts";

export const countEquals = defineCondition({
  params: {
    leftCount: {
      dataType: "unitCount",
    },
    rightCount: {
      dataType: "unitCount",
    },
  },
  evaluate: ({ leftCount, rightCount }) => leftCount === rightCount,
});
