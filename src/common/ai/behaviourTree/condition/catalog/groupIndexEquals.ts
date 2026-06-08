import { defineCondition } from "../ConditionDefinition.ts";

export const groupIndexEquals = defineCondition({
  params: {
    groupIndexLeft: {
      dataType: "groupIndex",
    },
    groupIndexRight: {
      dataType: "groupIndex",
    },
  },
  evaluate: ({ groupIndexLeft, groupIndexRight }) => groupIndexLeft === groupIndexRight,
});
