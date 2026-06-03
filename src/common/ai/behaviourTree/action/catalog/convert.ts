import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { BotState } from "../../../integration/createBot.ts";
import { UnitId } from "../../../../../types.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const convert = defineAction({
  type: "CONVERT",
  applicableForUnitType: [UnitType.Monk],
  params: {
    unit: {
      dataType: "unitId",
      mutationRequirements: undefined,
    },
  },
  execute: ({ unit }, gameState, botState: BotState, unitIds: UnitId[]) => {
    return {
      n: "START_CONVERSION",
      units: unitIds,
      target: unit,
    };
  },
});
