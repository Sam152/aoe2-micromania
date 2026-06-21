import { defineCondition } from "../ConditionDefinition.ts";

export const booleanIsTrue = defineCondition({
  params: {
    subject: {
      dataType: "boolean",
      allowedValueTypes: ["BLACKBOARD"],
    },
  },
  evaluate: ({ subject }) => subject,
});
