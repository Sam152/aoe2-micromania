import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const count = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
} satisfies DataTypeDefinition<number>;
