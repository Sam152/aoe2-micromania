import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const tickCount: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 1,
};
