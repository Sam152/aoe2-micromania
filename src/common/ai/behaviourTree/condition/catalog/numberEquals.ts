import { defineCondition } from "../ConditionDefinition.ts";

export const numberEquals = defineCondition({
  id: "numberEquals",
  params: {
    left: {
      dataType: "number",
    },
    right: {
      dataType: "number",
    },
  },
  evaluate: ({ left, right }) => left === right,
});
