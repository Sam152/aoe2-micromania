import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { averageVectorOrUndefined } from "../../../../util/averageVector.ts";
import { unitIsType } from "../utils/unitIsType.ts";

export const globalNonGroupUnitsOfTypeAveragePosition = defineBlackboardValue({
  dataType: "vector",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, state, botState, group }) => {
    const currentGroupUnitIds = new Set(group.includedUnits);
    return averageVectorOrUndefined(
      state.units
        .filter(
          (unit) =>
            unit.ownedByPlayer === botState.playingAs &&
            unitIsType(unit, params.unitType) &&
            !currentGroupUnitIds.has(unit.id),
        )
        .map((unit) => unit.position),
    );
  },
});
