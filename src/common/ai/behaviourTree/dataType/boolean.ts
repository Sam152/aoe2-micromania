import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const boolean: DataTypeDefinition<boolean, undefined> = {
  id: "boolean",
  conditions: {
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
};
