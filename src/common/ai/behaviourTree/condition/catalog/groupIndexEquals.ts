import { defineCondition } from "../ConditionDefinition.ts";

export const groupIndexEquals = defineCondition({
  params: {
    left: {
      dataType: "groupIndex",
    },
    right: {
      dataType: "groupIndex",
    },
  },
  evaluate: ({ left, right }) => left === right,
});
