import { defineCondition } from "../ConditionDefinition.ts";

export const formationEquals = defineCondition({
  params: {
    leftFormation: {
      dataType: "formation",
    },
    rightFormation: {
      dataType: "formation",
    },
  },
  evaluate: ({ leftFormation, rightFormation }) => leftFormation === rightFormation,
});
