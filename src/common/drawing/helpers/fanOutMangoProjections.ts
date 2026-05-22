import { hash } from "../../util/hash.ts";
import { rockPositionFactory } from "./rockPosition.ts";
import { ProjectileInstance } from "../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";

const MAX_OVERSHOOT_AMOUNT = 12;
const MAX_ANGLE_VARIANCE = 3;

export function fanOutMangoProjections(projectile: ProjectileInstance, percentageComplete: number) {
  const rockPosition = rockPositionFactory(projectile, percentageComplete);
  const origin = new Vector2(0, 0);

  let seedCount = 0;
  const angleVariance = () =>
    ((hash(projectile.id + seedCount++) % (MAX_ANGLE_VARIANCE * 2)) - MAX_ANGLE_VARIANCE) / 1000;

  const overshootVariance = () => (hash(projectile.id + seedCount++) % MAX_OVERSHOOT_AMOUNT) * 0.001;

  const newProjectiles = [
    projectile.pathVector.clone().rotateAround(origin, -0.03 + angleVariance()),
    projectile.pathVector.clone().multiplyScalar(1 + overshootVariance())
      .rotateAround(
        origin,
        -0.01 + angleVariance(),
      ),
    projectile.pathVector.clone().multiplyScalar(1 + overshootVariance())
      .rotateAround(
        origin,
        0.01 + angleVariance(),
      ),
    projectile.pathVector.clone().rotateAround(origin, 0.03 + angleVariance()),
  ];

  return newProjectiles
    .map((rotated) => {
      const offset = rotated.sub(projectile.pathVector);
      return rockPosition(offset.x, offset.y);
    });
}
