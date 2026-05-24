import { Vector2 } from "three/src/math/Vector2.js";
import { hash } from "../../../util/hash.ts";

export type AccuracyFunction = (input: {
  startingPoint: Vector2;
  aimingFor: Vector2;
  entropy: number;
}) => Vector2;

type CircularProbabilityArgs = {
  circleGrowthFactor: number;
  clusterStrength: number;
};

const defaults: CircularProbabilityArgs = {
  circleGrowthFactor: 6,
  clusterStrength: 2,
};

export function createCircularProbabilityAccuracy(
  { circleGrowthFactor, clusterStrength }: CircularProbabilityArgs = defaults,
): AccuracyFunction {
  return ({
    startingPoint,
    aimingFor,
    entropy,
  }) => {
    const distance = startingPoint.distanceTo(aimingFor);

    const circleSize = circleGrowthFactor * Math.log(distance);

    const randomUnitVector = new Vector2(
      (hash(entropy) % 1000) - 500,
      (hash(entropy + 1) % 1000) - 500,
    ).normalize();

    const accuracyScore = circleSize * Math.pow((hash(entropy + 2) % 10000) / 10000, clusterStrength);

    return aimingFor.clone().add(randomUnitVector.multiplyScalar(accuracyScore));
  };
}
