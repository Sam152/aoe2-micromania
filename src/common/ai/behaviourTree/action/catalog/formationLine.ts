import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";

import { UnitType } from "../../../../units/UnitType.ts";
import { FormationType } from "../../../../units/formations/FormationType.ts";

export const formationLine = defineAction({
  type: "FORMATION_LINE",
  applicableForUnitType: [UnitType.Archer, UnitType.Mangonel, UnitType.Monk],
  params: {},
  execute: (_params, { group }): GameStateAction => {
    return {
      n: "FORMATION_CHANGED",
      formation: FormationType.Line,
      units: group.includedUnits,
    };
  },
});
