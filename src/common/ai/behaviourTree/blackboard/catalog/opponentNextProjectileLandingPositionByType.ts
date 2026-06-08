import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

export const opponentNextProjectileLandingPositionByType = defineBlackboardValue({
  dataType: "vector",
  params: {
    type: {
      dataType: "projectileType",
      default: "MANGO_ROCK",
    },
  },
  resolve: ({ params, state, botState }) => {
    // Resolve the vector of the next projectile to land on the map, of the given type.
  },
});
