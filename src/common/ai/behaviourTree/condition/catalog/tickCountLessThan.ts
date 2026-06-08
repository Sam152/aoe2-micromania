import { defineCondition } from "../ConditionDefinition.ts";

export const tickCountLessThan = defineCondition({
  params: {
    leftTicks: {
      dataType: "tickCount",
    },
    rightTicks: {
      dataType: "tickCount",
    },
  },
  evaluate: ({ leftTicks, rightTicks }) => leftTicks < rightTicks,
});
