import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { doSplitGroup } from "../../../integration/util/doSplitGroup.ts";

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const splitGroup = defineAction({
  type: "SPLIT_GROUP",
  applicableForUnitType: [UnitType.Monk, UnitType.Archer, UnitType.Mangonel],
  params: {},
  execute: ({}, { group, state, botState }) => {
    doSplitGroup({ group, state, botState });
  },
});
