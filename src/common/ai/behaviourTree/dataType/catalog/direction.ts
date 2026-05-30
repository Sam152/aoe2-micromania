import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type Direction = "TOWARDS" | "AWAY_FROM" | "LEFT" | "RIGHT";

export const direction = {
  id: "direction",
  comparitors: {
    EQ: (node: Direction, blackboard: Direction) => node === blackboard,
    NEQ: (node: Direction, blackboard: Direction) => node !== blackboard,
  },
} satisfies DataTypeDefinition<Direction, undefined>;
