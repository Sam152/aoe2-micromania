import { ActionDefinition } from "./ActionDefinition.ts";

export const idle = {
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
  execute: ({ direction }) => {
  },
} as const satisfies ActionDefinition;
