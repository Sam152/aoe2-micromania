import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const idle = defineAction({
  type: "IDLE",
  applicableForUnitType: [UnitType.Monk, UnitType.Archer, UnitType.Mangonel],
  params: {
    forTicksAmount: {
      dataType: "tickCount",
    },
  },
  execute: () => undefined,
});
