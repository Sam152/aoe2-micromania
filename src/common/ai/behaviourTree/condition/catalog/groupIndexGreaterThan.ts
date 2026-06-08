import { defineCondition } from "../ConditionDefinition.ts";

export const groupIndexGreaterThan = defineCondition({
  params: {
    left: {
      dataType: "groupIndex",
    },
    right: {
      dataType: "groupIndex",
    },
  },
  evaluate: ({ left, right }) => left > right,
});
