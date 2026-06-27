import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { averageVectorOrUndefined } from "../../../../util/averageVector.ts";
import { unitIsType } from "../utils/unitIsType.ts";

export const opponentAverageUnitPositionByType = defineBlackboardValue({
  dataType: "vector",
  params: {
    unitType: {
      dataType: "unitType",
      default: "ARCHER",
    },
  },
  resolve: ({ params, state, botState }) =>
    averageVectorOrUndefined(
      state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs && unitIsType(unit, params.unitType))
        .map((unit) => unit.position),
    ),
});
