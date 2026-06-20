import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitIsType } from "../utils/unitIsType.ts";

export const opponentHasUnitType = defineBlackboardValue({
  dataType: "boolean",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, state, botState }) =>
    !!state.units
      .find((unit) => unitIsType(unit, params.unitType) && unit.ownedByPlayer !== botState.playingAs),
});
