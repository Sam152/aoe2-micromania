import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction, UnitId } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { BotState } from "../../../integration/createBot.ts";
import { UnitType } from "../../../../units/UnitType.ts";

export const patrol = defineAction({
  type: "PATROL",
  applicableForUnitType: [UnitType.Archer, UnitType.Mangonel],
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
      position: new Vector2(direction.x, direction.y),
    };
  },
});
