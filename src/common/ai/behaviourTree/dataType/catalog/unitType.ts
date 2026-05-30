import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type UnitType = "ARCHER" | "MANGO" | "MONK";

export const unitType = {
  id: "unitType",
  comparitors: {
    EQ: (node: UnitType, blackboard: UnitType) => node === blackboard,
    NEQ: (node: UnitType, blackboard: UnitType) => node !== blackboard,
  },
} satisfies DataTypeDefinition<UnitType, undefined>;
