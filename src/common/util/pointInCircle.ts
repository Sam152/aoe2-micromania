import { Vector2 } from "three/src/math/Vector2";

export default function pointInCircle(circlePosition: Vector2, radius: number, position: Vector2): boolean {
  return circlePosition.distanceTo(position) <= radius;
}
