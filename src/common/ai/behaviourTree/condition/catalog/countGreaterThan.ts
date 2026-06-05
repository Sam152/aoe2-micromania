import { defineCondition } from "../ConditionDefinition.ts";

export const countGreaterThan = defineCondition({
  params: {
    left: {
      dataType: "count",
    },
    right: {
      dataType: "count",
    },
  },
  evaluate: ({ left, right }) => left > right,
});
