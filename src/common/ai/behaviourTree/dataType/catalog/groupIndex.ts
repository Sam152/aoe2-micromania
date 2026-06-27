import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const groupIndex: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
};
