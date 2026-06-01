import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type UnitType = "ARCHER" | "MANGO" | "MONK";

export const unitId = {
  id: "unitId",
  /**
   * Only values from the blackboard make sense for this data type.
   */
  allowedValueTypes: ["BLACKBOARD"],
  defaultValue: -1,
} satisfies DataTypeDefinition<number, undefined>;
