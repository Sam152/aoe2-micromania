import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const direction = {
  id: "direction",
  conditions: {
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
} as const satisfies DataTypeDefinition<"TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT">;
