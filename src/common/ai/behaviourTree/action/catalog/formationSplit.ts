import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";

import { UnitType } from "../../../../units/UnitType.ts";
import { FormationType } from "../../../../units/formations/FormationType.ts";

export const formationSplit = defineAction({
  type: "FORMATION_SPLIT",
  applicableForUnitType: [UnitType.Archer, UnitType.Mangonel, UnitType.Monk],
  params: {},
  execute: (_params, { group }): GameStateAction => {
    return {
      n: "FORMATION_CHANGED",
      formation: FormationType.Split,
      units: group.includedUnits,
    };
  },
});
