import { defineCondition } from "../ConditionDefinition.ts";

export const numberGreaterThan = defineCondition({
  id: "numberGreaterThan",
  params: {
    left: {
      dataType: "number",
    },
    right: {
      dataType: "number",
    },
  },
  evaluate: ({ left, right }) => left > right,
});
