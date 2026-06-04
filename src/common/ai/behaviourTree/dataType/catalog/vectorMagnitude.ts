import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const vectorMagnitude: DataTypeDefinition<number> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: 0,
};
