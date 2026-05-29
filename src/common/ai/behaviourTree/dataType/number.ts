import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const number = {
  id: "number",
  conditions: {
    GT: (a, b) => a > b,
    LT: (a, b) => a < b,
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
} as const satisfies DataTypeDefinition<number>;
