import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: false,
} satisfies DataTypeDefinition<boolean>;
