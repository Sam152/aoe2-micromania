import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type UnitType = "ARCHER" | "MANGO" | "MONK";

export const unitType = {
  id: "unitType",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: "ARCHER",
} satisfies DataTypeDefinition<UnitType, undefined>;
