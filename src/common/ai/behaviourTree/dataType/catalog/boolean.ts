import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const boolean: DataTypeDefinition<boolean> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: false,
};
