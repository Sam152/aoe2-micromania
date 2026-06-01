import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const mergeGroup = defineAction({
  type: "MERGE_GROUP",
  applicableForUnitType: [UnitType.Monk, UnitType.Archer, UnitType.Mangonel],
  params: {},
  execute: () => undefined,
});
