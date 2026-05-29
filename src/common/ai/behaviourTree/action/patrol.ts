import { ActionDefinition } from "./actionsList.ts";

export const patrol = {
  type: "PATROL",
  params: {
    direction: {
      dataType: "direction",
      mutationRequirements: undefined,
    },
  },
  execute: ({ direction }) => {
  },
} as const satisfies ActionDefinition;
