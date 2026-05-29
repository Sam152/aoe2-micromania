import { ActionDefinition } from "./actionsList.ts";

export const patrol = {
  type: "PATROL",
  params: {
    direction: "direction",
  },
  execute: ({ direction }) => {
  },
} as const satisfies ActionDefinition;
