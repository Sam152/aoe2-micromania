import { defineCondition } from "../ConditionDefinition.ts";

export const isTrue = defineCondition({
  params: {
    subject: {
      dataType: "boolean",
    },
  },
  evaluate: ({ subject }) => subject,
});
