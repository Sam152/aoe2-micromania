import { defineCondition } from "../ConditionDefinition.ts";

export const tickCountEquals = defineCondition({
  params: {
    leftTicks: {
      dataType: "tickCount",
    },
    rightTicks: {
      dataType: "tickCount",
    },
  },
  evaluate: ({ leftTicks, rightTicks }) => leftTicks === rightTicks,
});
