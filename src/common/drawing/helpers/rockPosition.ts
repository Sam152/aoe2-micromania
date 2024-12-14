import { ProjectileInstance } from "../../../types";
import getArrowPosition from "./getArrowPosition";
import { Vector2 } from "three/src/math/Vector2";

export function rockPositionFactory(projectile: ProjectileInstance, percentageComplete: number) {
  return (x: number, y: number) =>
    getArrowPosition(
      {
        pathVector: projectile.pathVector.clone().add(new Vector2(x, y)),
        startingPoint: projectile.startingPoint,
      },
      percentageComplete,
    );
}
