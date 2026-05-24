import { Vector2 } from "three/src/math/Vector2.js";

export type AccuracyFunction = (input: {
  startingPoint: Vector2;
  aimingFor: Vector2;
  entropy: number;
}) => Vector2;

type CircularProbabilityArgs = {
  circleDistanceRatio: number;
};

const defaults: CircularProbabilityArgs = {
  circleDistanceRatio: 6,
};

export function createCircularProbabilityAccuracy(
  { circleDistanceRatio }: CircularProbabilityArgs = defaults,
): AccuracyFunction {
  return ({
    startingPoint,
    aimingFor,
    entropy,
  }) => {
    const distance = startingPoint.distanceTo(aimingFor);
    const circleSize = distance / circleDistanceRatio;

    return aimingFor.clone();
  };
}
