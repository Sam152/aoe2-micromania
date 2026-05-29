import { ActionDefinition } from "./ActionDefinition.ts";

export const idle = {
  type: "IDLE",
  params: {
    forTicksAmount: "number",
  },
  execute: ({ direction }) => {
  },
} as const satisfies ActionDefinition;
