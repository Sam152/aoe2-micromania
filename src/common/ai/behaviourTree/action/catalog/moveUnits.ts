import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";

import { UnitType } from "../../../../units/UnitType.ts";

export const moveUnits = defineAction({
  type: "MOVE_UNITS",
  applicableForUnitType: [UnitType.Archer, UnitType.Mangonel, UnitType.Monk],
  params: {
    direction: {
      dataType: "vector",
    },
  },
  execute: ({ direction }, { group }): GameStateAction => {
    return {
      n: "MOVE_UNITS_TO",
      units: group.includedUnits,
      position: new Vector2(direction.x, direction.y),
    };
  },
});
