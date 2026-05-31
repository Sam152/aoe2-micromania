import { defineAction } from "../ActionDefinition.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const idle = defineAction({
  type: "IDLE",
  params: {
    forTicksAmount: {
      dataType: "number",
      mutationRequirements: {
        min: 0,
        max: 100,
        step: 5,
      },
    },
  },
  execute: () => {},
});
