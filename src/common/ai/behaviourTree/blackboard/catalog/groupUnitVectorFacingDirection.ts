import { defineBlackboardValue } from "../types/defineBlackboardValue.ts";
import { groupAveragePosition } from "../utils/groupAveragePosition.ts";
import { vectorToPrimitive } from "../utils/vectorToPrimitive.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { degToRad } from "three/src/math/MathUtils.js";

export const groupUnitVectorFacingDirection = defineBlackboardValue({
  dataType: "vector",
  params: {
    direction: {
      dataType: "vector",
      default: { x: 0, y: 0 },
    },
    angle: {
      dataType: "vectorAngle",
      default: 0,
    },
    magnitude: {
      dataType: "vectorMagnitude",
      default: 100,
    },
  },
  resolve: ({ params, group, computed }) => {
    const groupPosition = groupAveragePosition({ group, computed });
    if (!groupPosition) {
      return undefined;
    }
    return vectorToPrimitive(
      new Vector2(params.direction.x, params.direction.y).sub(groupPosition).rotateAround({
        x: 0,
        y: 0,
      }, degToRad(params.angle))
        .normalize()
        .multiplyScalar(params.magnitude)
        .add(groupPosition),
    );
  },
});
