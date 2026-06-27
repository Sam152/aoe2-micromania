import { defineCondition } from "../ConditionDefinition.ts";

export const formationEquals = defineCondition({
  params: {
    leftFormation: {
      dataType: "formation",
      allowedValueTypes: ["BLACKBOARD"],
    },
    rightFormation: {
      dataType: "formation",
      allowedValueTypes: ["BLACKBOARD", "LITERAL"],
    },
  },
  evaluate: ({ leftFormation, rightFormation }) => leftFormation === rightFormation,
});
