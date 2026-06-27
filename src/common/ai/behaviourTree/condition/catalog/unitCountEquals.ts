import { defineCondition } from "../ConditionDefinition.ts";

export const unitCountEquals = defineCondition({
  params: {
    leftUnitCount: {
      dataType: "unitCount",
      allowedValueTypes: ["BLACKBOARD"],
    },
    rightUnitCount: {
      dataType: "unitCount",
      allowedValueTypes: ["BLACKBOARD", "LITERAL"],
    },
  },
  evaluate: ({ leftUnitCount, rightUnitCount }) => leftUnitCount === rightUnitCount,
});
