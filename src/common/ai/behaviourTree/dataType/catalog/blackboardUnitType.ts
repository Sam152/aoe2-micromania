import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export type BlackboardUnitType = "ARCHER" | "MANGO" | "MONK";

export const unitType = {
  id: "unitType",
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: "ARCHER",
} satisfies DataTypeDefinition<BlackboardUnitType>;
