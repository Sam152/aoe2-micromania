import {Vector2} from "three";

export function circle(ctx: CanvasRenderingContext2D, position: Vector2, radius: number = 5) {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
}
