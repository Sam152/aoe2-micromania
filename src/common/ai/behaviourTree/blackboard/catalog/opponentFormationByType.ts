import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { unitIsType } from "../utils/unitIsType.ts";
import { dominantFormation } from "../utils/dominantFormation.ts";

export const opponentFormationByType = defineBlackboardValue({
  dataType: "formation",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, state, botState }) =>
    dominantFormation(
      state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs && unitIsType(unit, params.unitType)),
    ),
});
