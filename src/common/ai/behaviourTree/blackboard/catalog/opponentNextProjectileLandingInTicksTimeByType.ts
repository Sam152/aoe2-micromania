import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { ProjectileInstance } from "../../../../../types.ts";
import { projectileIsType } from "../utils/projectileIsType.ts";

export const opponentNextProjectileLandingInTicksTimeByType = defineBlackboardValue({
  dataType: "tickCount",
  params: {
    type: {
      dataType: "projectileType",
      default: "MANGO_ROCK",
    },
  },
  resolve: ({ params, state, botState }) => {
    const next = state.projectiles
      .filter((projectile) =>
        projectileIsType(projectile, params.type) &&
        projectile.ownedBy !== botState.playingAs
      )
      .reduce<ProjectileInstance | undefined>(
        (soonest, projectile) =>
          soonest === undefined || projectile.arrivingTick < soonest.arrivingTick ? projectile : soonest,
        undefined,
      );

    return next === undefined ? undefined : next.arrivingTick - state.ticks;
  },
});
