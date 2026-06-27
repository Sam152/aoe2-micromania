import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitsInGroup } from "../utils/unitsInGroup.ts";
import { UnitType } from "../../../../units/UnitType.ts";

export const groupIsConverting = defineBlackboardValue({
  dataType: "boolean",
  params: {},
  resolve: ({ group, computed }) => {
    if (group.unitType !== UnitType.Monk) {
      return;
    }
    return !!unitsInGroup({ group, computed }).find((unit) => unit.convertingUnit !== undefined);
  },
});
