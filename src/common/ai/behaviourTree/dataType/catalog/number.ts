import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number = {
  id: "number",
  defaultValue: 0,
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
