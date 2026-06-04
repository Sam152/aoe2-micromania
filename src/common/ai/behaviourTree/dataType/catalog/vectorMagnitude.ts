import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const vectorMagnitude = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number>;
