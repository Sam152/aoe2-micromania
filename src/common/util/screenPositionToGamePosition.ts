import screenManager from "../drawing/screenManager";
import { Vector2 } from "three/src/math/Vector2";

export default function screenPositionToGamePosition(screenPosition: Vector2): Vector2 {
  return screenPosition.clone().multiplyScalar(screenManager.getCanvasScale());
}

export function gamePositionToScreenPosition(screenPosition: Vector2): Vector2 {
  return screenPosition.clone().divideScalar(screenManager.getCanvasScale());
}
