import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export type BlackboardUnitType = "ARCHER" | "MANGO" | "MONK";

export const unitType: DataTypeDefinition<BlackboardUnitType> = {
  allowedValueTypes: ["BLACKBOARD", "LITERAL"],
  defaultValue: "ARCHER",
};
