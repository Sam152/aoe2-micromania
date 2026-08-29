import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const sidedDice: DataTypeDefinition<number> = {
  allowedValueTypes: ["LITERAL"],
  defaultValue: 5,
};
