import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean = {
  id: "boolean",
  allowedValueTypes: ["BLACKBOARD", "PRIMITIVE"],
  defaultValue: false,
} satisfies DataTypeDefinition<boolean, undefined>;
