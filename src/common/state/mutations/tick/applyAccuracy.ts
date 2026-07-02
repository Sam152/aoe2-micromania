import { Vector2 } from "three/src/math/Vector2.js";
import { hash } from "../../../util/hash.ts";

export type AccuracyFunction = (input: {
  startingPoint: Vector2;
  aimingFor: Vector2;
  entropy: number;
}) => Vector2;

type CircularProbabilityArgs = {
  linearDistanceFactor: number;
  clusterStrength: number;
};

export const defaults: CircularProbabilityArgs = {
  linearDistanceFactor: 0.03,
  clusterStrength: 1.2,
};

export function createCircularProbabilityAccuracy(
  { clusterStrength, linearDistanceFactor }: CircularProbabilityArgs = defaults,
): AccuracyFunction {
  return ({
    startingPoint,
    aimingFor,
    entropy,
  }) => {
    const distance = startingPoint.distanceTo(aimingFor);

    const circleSize = distance * linearDistanceFactor;

    const angle = ((hash(entropy) % 10000) / 10000) * Math.PI * 2;
    const randomUnitVector = new Vector2(Math.cos(angle), Math.sin(angle));

    const accuracyScore = circleSize * Math.pow((hash(entropy + 1) % 10000) / 10000, clusterStrength);
    return aimingFor.clone().add(randomUnitVector.multiplyScalar(accuracyScore));
  };
}
