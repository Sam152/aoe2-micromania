import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const number: DataTypeDefinition<number, { min: number; max: number; step: number }> = {
  id: "number",
  conditions: {
    GT: (a, b) => a > b,
    LT: (a, b) => a < b,
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
};
