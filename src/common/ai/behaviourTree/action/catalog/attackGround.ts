import { defineAction } from "../ActionDefinition.ts";
import { GameStateAction } from "../../../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";

import { UnitType } from "../../../../units/UnitType.ts";

export const attackGround = defineAction({
  type: "ATTACK_GROUND",
  applicableForUnitType: [UnitType.Mangonel],
  params: {
    attackGroundPosition: {
      dataType: "vector",
      allowedValueTypes: ["BLACKBOARD"],
    },
  },
  execute: ({ attackGroundPosition }, { group }): GameStateAction => {
    return {
      n: "ATTACK_GROUND",
      units: group.includedUnits,
      position: new Vector2(attackGroundPosition.x, attackGroundPosition.y),
    };
  },
});
