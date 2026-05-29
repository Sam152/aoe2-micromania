import { DataTypeDefinition } from "./DataTypeDefinition.ts";

export const direction: DataTypeDefinition<"TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT", undefined> = {
  id: "direction",
  conditions: {
    EQ: (a, b) => a === b,
    NEQ: (a, b) => a !== b,
  },
};
