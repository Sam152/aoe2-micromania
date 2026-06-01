import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const mergeGroup = defineAction({
  type: "CONVERT",
  applicableForUnitType: [UnitType.Monk],
  params: {
    unit: {
      dataType: "unitId",
      mutationRequirements: undefined,
    },
  },
  execute: () => undefined,
});
