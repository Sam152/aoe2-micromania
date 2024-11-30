import { Vector2 } from "three/src/math/Vector2";

export default function selectionCircle(
  ctx: CanvasRenderingContext2D,
  radius: number,
  color: string,
  position: Vector2,
) {
  ctx.beginPath();
  ctx.strokeStyle = "rgba(0, 0, 0, 1)";
  ctx.ellipse(position.x, position.y, radius, radius / 3, 0, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.ellipse(position.x, position.y - 1, radius, radius / 3, 0, 0, 2 * Math.PI);
  ctx.stroke();
}
