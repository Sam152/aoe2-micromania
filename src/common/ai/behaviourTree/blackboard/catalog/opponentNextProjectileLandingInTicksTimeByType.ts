import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";

export const opponentNextProjectileLandingInTicksTimeByType = defineBlackboardValue({
  dataType: "tickCount",
  params: {
    type: {
      dataType: "projectileType",
      default: "MANGO_ROCK",
    },
  },
  resolve: ({ params, state, botState }) => {
    // Resolve the number of ticks, until the next projectile of a given type will land.
  },
});
