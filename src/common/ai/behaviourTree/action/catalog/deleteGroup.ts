import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";
import { UnitType } from "../../../../units/UnitType.ts";

export const deleteGroup = defineAction({
  type: "DELETE_GROUP",
  applicableForUnitType: [UnitType.Mangonel, UnitType.Archer, UnitType.Monk],
  params: {},
  execute: (_, { group }): GameStateAction => {
    return {
      n: "DELETE_UNITS",
      units: group.includedUnits,
    };
  },
});
