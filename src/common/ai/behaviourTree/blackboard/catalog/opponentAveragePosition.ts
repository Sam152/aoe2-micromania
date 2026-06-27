import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { averageVectorOrUndefined } from "../../../../util/averageVector.ts";

/**
 * The average vector of all opponent units.
 */
export const opponentAveragePosition = defineBlackboardValue({
  dataType: "vector",
  params: {},
  resolve: ({ state, botState }) =>
    averageVectorOrUndefined(
      state.units.filter((unit) => unit.ownedByPlayer !== botState.playingAs).map((unit) => unit.position),
    ),
});
