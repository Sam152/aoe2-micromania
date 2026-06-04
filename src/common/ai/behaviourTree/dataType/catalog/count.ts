import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const count: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
};
