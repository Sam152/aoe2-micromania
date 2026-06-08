import { defineCondition } from "../ConditionDefinition.ts";

export const countEquals = defineCondition({
  params: {
    leftCount: {
      dataType: "count",
    },
    rightCount: {
      dataType: "count",
    },
  },
  evaluate: ({ leftCount, rightCount }) => leftCount === rightCount,
});
