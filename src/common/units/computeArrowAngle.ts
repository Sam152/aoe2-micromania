import { ProjectileInstance } from "../../types.ts";
import { getArrowPosition } from "../drawing/helpers/getArrowPosition.ts";

type ComputeArrowAngleParams = {
  arrow: ProjectileInstance;
  percentageComplete: number;
};

export function computeArrowAngle({
  arrow,
  percentageComplete,
}: ComputeArrowAngleParams) {
  const positionPrevious = getArrowPosition(arrow, Math.max(0, percentageComplete - 0.1));
  const position = getArrowPosition(arrow, percentageComplete);
  const angle = position.clone().sub(positionPrevious).angle();

  return angle + Math.PI * 1.5;
}
