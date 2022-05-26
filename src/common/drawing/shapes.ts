import {Vector2} from 'three/src/math/Vector2';
import {Rectangle} from '../../types';

export function circle(ctx: CanvasRenderingContext2D, position: Vector2 | {x: number, y: number}, radius: number = 5, color: string = 'green') {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

export function emptyCircle(ctx: CanvasRenderingContext2D, position: Vector2 | {x: number, y: number}, radius: number = 2, color: string = 'green') {
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.stroke();
}

export function square(ctx: CanvasRenderingContext2D, rect: Rectangle, color: string = 'red', width: number = 2) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.strokeRect(rect.p1.x, rect.p1.y, rect.p2.x - rect.p1.x, rect.p2.y - rect.p1.y);
}

export function number(ctx: CanvasRenderingContext2D, position: Vector2, text: any): void {
    ctx.font = '11px Arial';
    ctx.fillText(`${text}`, position.x - 20, position.y - 30);
}
