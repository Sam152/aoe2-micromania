import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const count = {
  id: "count",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
