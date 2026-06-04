import { defineCondition } from "../ConditionDefinition.ts";

export const numberEquals = defineCondition({
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
