import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number>;
