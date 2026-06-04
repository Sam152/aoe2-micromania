import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";

import { UnitType } from "../../../../units/UnitType.ts";

export const patrol = defineAction({
  type: "PATROL",
  applicableForUnitType: [UnitType.Archer, UnitType.Mangonel],
  params: {
    direction: {
      dataType: "vector",
    },
  },
  execute: ({ direction }, { group }): GameStateAction => {
    return {
      n: "PATROL",
      units: group.includedUnits,
      position: new Vector2(direction.x, direction.y),
    };
  },
});
