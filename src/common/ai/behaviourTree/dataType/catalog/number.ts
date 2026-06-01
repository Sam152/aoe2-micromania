import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number = {
  id: "number",
  allowedValueTypes: ["BLACKBOARD", "PRIMITIVE"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
