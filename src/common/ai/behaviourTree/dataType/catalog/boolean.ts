import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean = {
  id: "boolean",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: false,
} satisfies DataTypeDefinition<boolean, undefined>;
