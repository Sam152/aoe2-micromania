import { hash } from "../../util/hash.ts";
import { rockPositionFactory } from "./rockPosition.ts";
import { ProjectileInstance } from "../../../types.ts";
import { Vector2 } from "three/src/math/Vector2.js";
import { arrayOfSize } from "../../util/arrayOfSize.ts";

const MAX_OVERSHOOT_AMOUNT = 50;
const MAX_ANGLE_VARIANCE = 3;
const ANGLE_SPREAD = 10;
const TOTAL_PROJECTILES = 6;

export function fanOutMangoProjections(projectile: ProjectileInstance, percentageComplete: number) {
  const rockPosition = rockPositionFactory(projectile, percentageComplete);
  const origin = new Vector2(0, 0);

  let seedCount = 0;
  const angleVariance = () =>
    ((hash(projectile.id + seedCount++) % (MAX_ANGLE_VARIANCE * 2)) - MAX_ANGLE_VARIANCE) / 1000;

  const overshootVariance = () =>
    ((hash(projectile.id + seedCount++) % MAX_OVERSHOOT_AMOUNT) - (MAX_OVERSHOOT_AMOUNT / 2)) * 0.001;

  const step = (ANGLE_SPREAD * 0.01) / TOTAL_PROJECTILES;
  const start = 0 - ((ANGLE_SPREAD * 0.01) / 2);

  const angleFactors: (number | undefined)[] = arrayOfSize(TOTAL_PROJECTILES).map((i) => start + (i * step));

  const newProjectiles = angleFactors.map((factor) => {
    const newPosition = projectile.pathVector.clone().multiplyScalar(1 + overshootVariance());
    return factor !== undefined
      ? newPosition.rotateAround(
        origin,
        factor + angleVariance(),
      )
      : newPosition;
  });

  return newProjectiles
    .map((rotated) => {
      const offset = rotated.sub(projectile.pathVector);
      return rockPosition(offset.x, offset.y);
    });
}
