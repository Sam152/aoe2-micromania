import { defineCondition } from "../ConditionDefinition.ts";

export const countGreaterThan = defineCondition({
  params: {
    count: {
      dataType: "count",
    },
    threshold: {
      dataType: "count",
    },
  },
  evaluate: ({ count, threshold }) => count > threshold,
});
