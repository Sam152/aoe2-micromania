import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number = {
  id: "number",
  comparitors: {
    GT: (node: number, blackboard: number) => node > blackboard,
    LT: (node: number, blackboard: number) => node < blackboard,
    EQ: (node: number, blackboard: number) => node === blackboard,
    NEQ: (node: number, blackboard: number) => node !== blackboard,
  },
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
