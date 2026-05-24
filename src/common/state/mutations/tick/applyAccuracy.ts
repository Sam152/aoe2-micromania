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
  circleGrowthRate: number;
  minCircleSize: number;
};

export const defaults: CircularProbabilityArgs = {
  circleGrowthFactor: 2.5,
  circleGrowthRate: 93,
  clusterStrength: 2.5,
  minCircleSize: 5,
};

export function createCircularProbabilityAccuracy(
  { circleGrowthFactor, clusterStrength, circleGrowthRate, minCircleSize }: CircularProbabilityArgs = defaults,
): AccuracyFunction {
  return ({
    startingPoint,
    aimingFor,
    entropy,
  }) => {
    const distance = startingPoint.distanceTo(aimingFor);

    const circleSize = circleGrowthFactor * Math.log(Math.max(minCircleSize, distance - circleGrowthRate));

    const angle = ((hash(entropy) % 10000) / 10000) * Math.PI * 2;
    const randomUnitVector = new Vector2(Math.cos(angle), Math.sin(angle));

    const accuracyScore = circleSize * Math.pow((hash(entropy + 1) % 10000) / 10000, clusterStrength);
    return aimingFor.clone().add(randomUnitVector.multiplyScalar(accuracyScore));
  };
}
