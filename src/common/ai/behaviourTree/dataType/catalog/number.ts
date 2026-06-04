import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const number: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
};
