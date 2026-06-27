import { defineAction } from "../ActionDefinition.ts";
import { UnitType } from "../../../../units/UnitType.ts";
import { doSplitGroup } from "../../../integration/util/doSplitGroup.ts";
import { params } from "../../../training/params.ts";

const { WHEEL_CLAMP_MAXIMUM_GROUP_SIZE_PER_UNIT_TYPE } = params;

/**
 * This is a meta action that acts on the bot state, not something that dispatches a game action.
 */
export const splitGroup = defineAction({
  type: "SPLIT_GROUP",
  applicableForUnitType: [UnitType.Monk, UnitType.Archer, UnitType.Mangonel],
  params: {
    splitGroupInto: {
      dataType: "groupSize",
      allowedValueTypes: ["LITERAL"],
    },
  },
  execute: ({ splitGroupInto }, { group, state, botState }) => {
    const allowedSplit = botState.unitGroups
      .filter(({ unitType }) => unitType === group.unitType)
      .length < WHEEL_CLAMP_MAXIMUM_GROUP_SIZE_PER_UNIT_TYPE;

    if (allowedSplit) {
      doSplitGroup({ group, state, botState, splitGroupInto });
    }
  },
});
