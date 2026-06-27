import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const unitCount: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
};
