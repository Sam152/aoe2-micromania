import { ActionDefinition } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export const patrol = {
  type: "PATROL",
  params: {
    direction: {
      dataType: "direction",
      mutationRequirements: undefined,
    },
  },
  execute: ({ direction }, gameState, botState): GameStateAction => {
    return {
      n: "PATROL",
      units: [1],
      position: new Vector2(1, 1),
    };
  },
} as const satisfies ActionDefinition;
