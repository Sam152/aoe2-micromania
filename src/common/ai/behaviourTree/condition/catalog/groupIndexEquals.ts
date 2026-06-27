import { defineCondition } from "../ConditionDefinition.ts";

export const groupIndexEquals = defineCondition({
  params: {
    groupIndexLeft: {
      dataType: "groupIndex",
      allowedValueTypes: ["BLACKBOARD"],
    },
    groupIndexRight: {
      dataType: "groupIndex",
      allowedValueTypes: ["BLACKBOARD", "LITERAL"],
    },
  },
  evaluate: ({ groupIndexLeft, groupIndexRight }) => groupIndexLeft === groupIndexRight,
});
