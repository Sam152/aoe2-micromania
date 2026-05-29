import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const number = {
  id: "number",
  conditions: {
    GT: (a: number, b: number) => a > b,
    LT: (a: number, b: number) => a < b,
    EQ: (a: number, b: number) => a === b,
    NEQ: (a: number, b: number) => a !== b,
  },
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
