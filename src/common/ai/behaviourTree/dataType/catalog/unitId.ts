import { DataTypeDefinition } from "../DataTypeDefinition.ts";

type UnitType = "ARCHER" | "MANGO" | "MONK";

export const unitId: DataTypeDefinition<number> = {
  /**
   * Only values from the blackboard make sense for this data type.
   */
  allowedValueTypes: ["BLACKBOARD"],
  defaultValue: -1,
};
