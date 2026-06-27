import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitIsType } from "../utils/unitIsType.ts";

export const opponentUnitCountByType = defineBlackboardValue({
  dataType: "unitCount",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, state, botState }) =>
    state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs && unitIsType(unit, params.unitType)).length,
});
