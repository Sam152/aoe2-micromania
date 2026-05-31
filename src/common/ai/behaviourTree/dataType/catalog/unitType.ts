import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type UnitType = "ARCHER" | "MANGO" | "MONK";

export const unitType = {
  id: "unitType",
  defaultValue: "ARCHER" as UnitType,
} satisfies DataTypeDefinition<UnitType, undefined>;
