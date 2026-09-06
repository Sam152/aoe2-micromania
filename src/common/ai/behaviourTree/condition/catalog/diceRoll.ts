import { defineCondition } from "../ConditionDefinition.ts";

export const diceRoll = defineCondition({
  params: {
    sides: {
      dataType: "sidedDice",
      allowedValueTypes: ["LITERAL"],
    },
  },
  evaluate: ({ sides }) => Math.floor(Math.random() * sides) === 0,
});
