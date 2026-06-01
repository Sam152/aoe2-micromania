import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const vectorMagnitude = {
  id: "vectorMangitude",
  defaultValue: 0,
} satisfies DataTypeDefinition<number, { min: number; max: number; step: number }>;
