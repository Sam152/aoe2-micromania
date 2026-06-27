import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitIsType } from "../utils/unitIsType.ts";

/**
 * The total number of units owned by the player of a given type.
 */
export const globalOwnedUnitsOfTypeCount = defineBlackboardValue({
  dataType: "unitCount",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ state, botState, params }) =>
    state.units.filter((unit) => unit.ownedByPlayer === botState.playingAs && unitIsType(unit, params.unitType)).length,
});
