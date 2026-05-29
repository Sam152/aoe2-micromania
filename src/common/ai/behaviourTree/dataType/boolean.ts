import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const boolean = {
  id: "boolean",
  conditions: {
    EQ: (a: boolean, b: boolean) => a === b,
    NEQ: (a: boolean, b: boolean) => a !== b,
  },
} satisfies DataTypeDefinition<boolean, undefined>;
