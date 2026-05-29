import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const direction = {
  id: "direction",
  conditions: {
    EQ: (a: "TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT", b: "TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT") => a === b,
    NEQ: (a: "TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT", b: "TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT") => a !== b,
  },
} satisfies DataTypeDefinition<"TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT", undefined>;
