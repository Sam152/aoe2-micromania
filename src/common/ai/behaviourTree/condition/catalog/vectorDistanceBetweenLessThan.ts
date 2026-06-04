import { defineCondition } from "../ConditionDefinition.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export const vectorDistanceBetweenLessThan = defineCondition({
  params: {
    pointA: {
      dataType: "vector",
    },
    pointB: {
      dataType: "vector",
    },
    distance: {
      dataType: "number",
    },
  },
  evaluate: ({ pointA, pointB, distance }) =>
    new Vector2(pointA.x, pointA.y).distanceTo(new Vector2(pointB.x, pointB.y)) > distance,
});
