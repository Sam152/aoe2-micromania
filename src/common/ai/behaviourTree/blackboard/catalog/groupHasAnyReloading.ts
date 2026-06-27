import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { unitsInGroup } from "../utils/unitsInGroup.ts";

export const groupHasAnyReloading = defineBlackboardValue({
  dataType: "boolean",
  params: {},
  resolve: ({ group, computed, state }) => {
    if (group.unitType === UnitType.Monk) {
      return;
    }
    return !!unitsInGroup({ group, computed }).find((unit) => unit.reloadsAt > state.ticks);
  },
});
