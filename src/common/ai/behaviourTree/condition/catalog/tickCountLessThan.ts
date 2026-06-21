import { defineCondition } from "../ConditionDefinition.ts";

export const tickCountLessThan = defineCondition({
  params: {
    leftTicks: {
      dataType: "tickCount",
      allowedValueTypes: ["BLACKBOARD"],
    },
    rightTicks: {
      dataType: "tickCount",
      allowedValueTypes: ["BLACKBOARD", "LITERAL"],
    },
  },
  evaluate: ({ leftTicks, rightTicks }) => leftTicks < rightTicks,
});
