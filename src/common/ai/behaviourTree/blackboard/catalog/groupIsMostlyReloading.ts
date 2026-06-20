import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { unitsInGroup } from "../utils/unitsInGroup.ts";

export const groupIsMostlyReloading = defineBlackboardValue({
  dataType: "boolean",
  params: {},
  resolve: ({ group, computed, state }) => {
    if (group.unitType === UnitType.Monk) {
      return;
    }

    const units = unitsInGroup({ group, computed });
    const reloadingCount = units.filter((unit) => unit.reloadsAt > state.ticks);

    return reloadingCount.length > (units.length / 2);
  },
});
