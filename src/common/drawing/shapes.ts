import {Vector2} from "three";
import {Rectangle} from "../../types";

export function circle(ctx: CanvasRenderingContext2D, position: Vector2, radius: number = 5, color: string = "green") {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

export function square(ctx: CanvasRenderingContext2D, rect: Rectangle, color: string, width: number) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.strokeRect(rect.p1.x, rect.p1.y, rect.p2.x - rect.p1.x, rect.p2.y - rect.p1.y);
}
