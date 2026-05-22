import { ProjectileInstance } from "../../../types.ts";
import { getArrowPosition } from "./getArrowPosition.ts";
import { Vector2 } from "three/src/math/Vector2.js";

export function rockPositionFactory(projectile: ProjectileInstance, percentageComplete: number) {
  return (x: number, y: number) =>
    getArrowPosition(
      {
        pathVector: projectile.pathVector.clone().add(new Vector2(x, y)),
        startingPoint: projectile.startingPoint,
        arrivingTick: projectile.arrivingTick,
      },
      percentageComplete,
    );
}
