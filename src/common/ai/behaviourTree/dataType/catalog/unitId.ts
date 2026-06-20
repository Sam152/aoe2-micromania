import { DataTypeDefinition } from "../DataTypeDefinition.ts";

export const unitId: DataTypeDefinition<number> = {
  /**
   * Only values from the blackboard make sense for this data type.
   */
  allowedValueTypes: ["BLACKBOARD"],
  defaultValue: -1,
};
