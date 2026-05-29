import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const boolean: DataTypeDefinition<boolean> = {
  id: "boolean",
  conditions: {
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
};
