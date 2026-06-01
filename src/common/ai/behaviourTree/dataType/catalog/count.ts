import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const count = {
  id: "count",
  allowedValueTypes: ["BLACKBOARD", "PRIMITIVE"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
