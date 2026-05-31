import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction, UnitId } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { BotState } from "../../../integration/createBot.ts";

export const patrol = defineAction({
  type: "PATROL",
  params: {
    direction: {
      dataType: "vector",
      mutationRequirements: undefined,
    },
  },
  execute: ({ direction }, gameState, botState: BotState, unitIds: UnitId[]): GameStateAction => {
    return {
      n: "PATROL",
      units: unitIds,
      position: new Vector2(1, 1),
    };
  },
});
